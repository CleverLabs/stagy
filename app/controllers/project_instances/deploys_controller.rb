# frozen_string_literal: true

module ProjectInstances
  class DeploysController < ApplicationController
    def show
      @project = find_project
      @project_instance = @project.project_instances.find(params[:project_instance_id])
      return if params[:custom_deploy]

      deploy(@project_instance)
      redirect_to project_project_instance_path(@project, @project_instance)
    end

    def create
      @project = find_project
      @project_instance = @project.project_instances.find(params[:project_instance_id])

      if update_configurations(@project_instance)
        deploy(@project_instance)
        redirect_to project_project_instance_path(@project, @project_instance)
      else
        render :show
      end
    end

    private

    def find_project
      Project.find(params[:project_id])
    end

    def project_instance_params
      params.require(:project_instance).require(:configurations).permit!
    end

    def update_configurations(project_instance)
      project_instance.configurations.each do |configuration|
        configuration["git_reference"] = project_instance_params[configuration.fetch("application_name")].presence || configuration["git_reference"]
      end
      project_instance.save
    end

    def deploy(project_instance)
      Deployment::Processes::DeployNewInstance.new(project_instance).call(current_user)
    end
  end
end