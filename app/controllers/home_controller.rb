# frozen_string_literal: true

class HomeController < ApplicationController
  def index
    @failed_builds = ProjectInstance.where(deployment_status: Constants::ProjectInstance::FAILURE).order(updated_at: :desc).limit(10).includes(:project)
    @updated_builds = ProjectInstance.order(updated_at: :desc).limit(10).includes(:project)
  end
end
