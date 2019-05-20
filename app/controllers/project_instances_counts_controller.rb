# frozen_string_literal: true

class ProjectInstancesCountsController < ApplicationController
  def index
    @instances_counts = ProjectInstance.all.select("project_instances.deployment_status, COUNT(project_instances.id) as instances_count").group(:deployment_status)
    render json: @instances_counts
  end
end
