# frozen_string_literal: true

# rubocop:disable Metrics/AbcSize, Metrics/LineLength
module Admin
  class DashboardsController < ApplicationController
    def show
      AdminPanelPolicy.new(current_user, :no_record).authorize!(:show?)

      @active_instances = ProjectInstance.select("project_instances.*, projects.name as project_name").joins(:project).where(deployment_status: ProjectInstanceConstants::Statuses::ALL_ACTIVE).order(created_at: :desc)
      @active_builds_count = BuildAction.where(status: BuildActionConstants::Statuses::RUNNING).count
      @instances_with_failed_build_for_last_2_days = ProjectInstance.joins(:build_actions).where(build_actions: { status: BuildActionConstants::Statuses::FAILURE, created_at: 2.days.ago..Float::INFINITY })

      @projects_names = Project.order(created_at: :desc).pluck(:name)
      @users_count = User.count

      @new_users = User.where(created_at: 2.weeks.ago..Float::INFINITY)
      @new_waiting_emails = WaitingList.where(created_at: 2.weeks.ago..Float::INFINITY)
    end
  end
end
# rubocop:enable Metrics/AbcSize, Metrics/LineLength
