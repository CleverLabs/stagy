# frozen_string_literal: true

module DeploymentProcesses
  class Configuration
    include ShallowAttributes

    attribute :application_name, String
    attribute :repo_path, String
    attribute :private_key, String
    attribute :env_variables, Hash

    def self.build_by_deployment_configuration(deployment_configuration)
      new(
        application_name: "organization-project-#{deployment_configuration.name}",
        repo_path: deployment_configuration.repo_path,
        private_key: deployment_configuration.private_key,
        env_variables: deployment_configuration.env_variables
      )
    end
  end
end
