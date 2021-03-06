# frozen_string_literal: true

module Deployment
  module Processes
    class CreateAttachedProjectInstance
      def initialize(project)
        @project = project
      end

      def call(project_instance_name:, branches:, attached_repo_path:, attached_pull_request_number:)
        ProjectInstanceDomain.create(
          project_id: @project.id,
          name: project_instance_name,
          deployment_status: ProjectInstanceConstants::Statuses::PULL_REQUEST,
          attached_pull_request: { repo: attached_repo_path, number: attached_pull_request_number },
          branches: branches
        )
      end
    end
  end
end
