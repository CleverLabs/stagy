# frozen_string_literal: true

module Deployment
  module Processes
    class UpdateProjectInstance
      def initialize(project_instance, current_user)
        @project_instance = project_instance
        @current_user = current_user
      end

      def call
        configurations = Deployment::ConfigurationBuilder.new.by_project_instance(@project_instance).map(&:to_h)
        build_action = BuildAction.create!(project_instance: @project_instance, author: @current_user, action: BuildAction::UPDATE_INSTANCE)
        logger = ::BuildActionLogger.new(build_action).serialize
        ServerActionsCallJob.perform_later(Deployment::ServerActions::Update.to_s, configurations, logger, @project_instance, ProjectInstance::UPDATING.to_s)
      end
    end
  end
end
