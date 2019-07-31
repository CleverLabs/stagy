# frozen_string_literal: true

module Github
  module WebhookProcessors
    class UpdatePullRequest
      def initialize(body)
        @wrapped_body = Github::Events::PullRequest.new(payload: body)
        @project = Project.find_by(integration_type: ProjectsConstants::Providers::GITHUB, integration_id: @wrapped_body.installation_id)
      end

      def call
        return ReturnValue.ok unless DeploymentConfigurationStatus.new(@project).active?(@wrapped_body.full_repo_name)

        project_instance = @project.project_instances.find_by(attached_pull_request_number: @wrapped_body.number)
        Deployment::Processes::UpdateProjectInstance.new(project_instance, get_user(@wrapped_body.sender)).call
        ReturnValue.ok
      end

      private

      def get_user(sender)
        ::User.find_or_create_by!(auth_provider: ProjectsConstants::Providers::GITHUB, auth_uid: sender.id) do |user|
          user.full_name = sender.login
        end
      end
    end
  end
end
