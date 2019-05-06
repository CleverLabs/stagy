# frozen_string_literal: true

class ProjectInstancesController < ApplicationController
  def index
    @project = find_project
    @project_instances = @project.project_instances
  end

  def new
    @project = find_project
    @project_instance = @project.project_instances.build
  end

  def create
    @project = find_project
    result = Deployment::Repositories::ProjectInstanceRepository.new(@project).create(params.require(:project_instance).fetch(:name), "master")

    if result.status == :ok
      redirect_to project_project_instance_path(@project, result.object)
    else
      @project_instance = result.object
      render :new
    end
  end

  def show
    @project = find_project
    @project_instance = @project.project_instances.find(params[:id])
  end

  private

  def find_project
    Project.find(params[:project_id])
  end
end
