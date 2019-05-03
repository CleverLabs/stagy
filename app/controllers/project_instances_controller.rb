# frozen_string_literal: true

class ProjectInstancesController < ApplicationController
  def index
    @project = find_project
    @project_instances = @project.project_instances
  end

  private

  def find_project
    Project.find(params[:project_id])
  end
end
