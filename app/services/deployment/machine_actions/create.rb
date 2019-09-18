# frozen_string_literal: true
require 'blanket'

module Deployment
  module MachineActions
    class Create
      def initialize(configurations, state_machine)
        @configurations = configurations
        @state_machine = state_machine
      end

      def call
        @configurations.each_with_object(@state_machine.start) do |configuration, state|
          @state_machine.context = configuration
          deploy_configuration(configuration, state)
        end
        @state_machine.finalize
      end

      private

      def deploy_configuration(configuration, state)
        state.add_state(:create_server) do
          create_server(configuration, state)
          ReturnValue.ok
        end
      end

      def create_server(configuration, state)
        server = ::Blanket.wrap(ENV["DEPLOYQA_SERVICE_URL"])
        server.application(configuration.application_name).post(body: { repo: { uri: repo_uri(configuration.repo_configuration) } })
      end

      def repo_uri(repo_configuration)
        if repo_configuration.project_integration_type == ProjectsConstants::Providers::VIA_SSH
          { uri: repo_configuration.repo_path, private_key: repo_configuration.project_integration_id }
        else
          { uri: GithubAppClient.new(repo_configuration.project_integration_id).repo_uri(repo_configuration.repo_path) }
        end
      end
    end
  end
end
