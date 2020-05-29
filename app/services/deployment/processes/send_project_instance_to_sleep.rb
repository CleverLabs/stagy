# frozen_string_literal: true

module Deployment
  module Processes
    class SendProjectInstanceToSleep
      def initialize(project_instance)
        @project_instance = project_instance
        @user_reference = :TODO_IMPLEMENT
      end

      def call
        return unless can_go_to_sleep?

        build_action = @project_instance.create_action!(author: @user_reference, action: BuildActionConstants::SLEEP_INSTANCE)
        executor = Robad::Executor.new(build_action)
        executor.action_call(@project_instance.deployment_configurations)

        new_urls = create_sleeping_instances
        executor.update_sleep_instance(SleepingInstance.pluck(:urls).flatten, new_urls)
      end

      private

      def can_go_to_sleep?
        return false if @project_instance.last_action_record.updated_at > ProjectInstanceConstants::SLEEP_TIMEOUT_TIME.ago
        return false if @project_instance.action_status == BuildActionConstants::Statuses::RUNNING

        recent_requests = @project_instance.configurations.any? do |configuration|
          timestamp = MetricsRedis.get(RedisKeys.new.instance_last_access_time(configuration.application_name))
          Time.at(timestamp) > ProjectInstanceConstants::SLEEP_TIMEOUT_TIME.ago
        end

        !recent_requests
      end

      def create_sleeping_instances
        @project_instance.configurations.map do |configuration|
          urls = configuration.web_processes.map { |web_process| web_process["external_exposure"].presence }.compact
          SleepingInstance.create!(project_instance_id: @project_instance.id, urls: urls, application_name: configuration.application_name)
          urls
        end.flatten
      end
    end
  end
end
