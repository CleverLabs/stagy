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
    result = Deployment::Repositories::ProjectInstanceRepository.new(@project).create(project_instance_name, "master")

    if result.status == :ok
      deploy_instance(result.object)
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

  def project_instance_name
    params.require(:project_instance).fetch(:name)
  end

  def deploy_instance(project_instance)
    AsyncClassCall.perform_later(Deployment::Processes::Create.to_s, [Deployment::Configuration.build_from_project_instance(project_instance).map(&:to_h)], [])
  end
end
