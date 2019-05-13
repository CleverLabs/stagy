# frozen_string_literal: true

module Deployment
  module Processes
    class CreateProjectInstance
      def initialize(project)
        @project = project
      end

      def call(project_instance_name:)
        configurations = Deployment::Configuration.build_from_project(@project, project_instance_name)
        creation_result = Deployment::Repositories::ProjectInstanceRepository.new(@project).create(project_instance_name, "master", configurations_for_project_instance(configurations))
        return creation_result unless creation_result.status == :ok

        deploy_instance(configurations)
        creation_result
      end

      private

      def deploy_instance(configurations)
        ServerActionsCallJob.perform_later(Deployment::ServerActions::Create.to_s, configurations.map(&:to_h))
      end

      def configurations_for_project_instance(configurations)
        configurations.map { |configuration| configuration.to_h.slice(:application_name, :deployment_configuration_id) }
      end
    end
  end
end
