# frozen_string_literal: true

module ProjectInstances
  class DatabaseDumpsController < ApplicationController
    def index
      @project = find_project
      @project_instance = @project.project_instances.find(params[:project_instance_id])
      @dumps_list = ServerAccess::HerokuDatabase.new(name: "normal-project-w-default").dumps_list
    end

    def show
      @project = find_project
      @project_instance = @project.project_instances.find(params[:project_instance_id])
      redirect_to ServerAccess::HerokuDatabase.new(name: "normal-project-w-default").link_to_dump(params[:id])
    end

    def create
      @project = find_project
      @project_instance = @project.project_instances.find(params[:project_instance_id])
      @dumps_list = ServerAccess::HerokuDatabase.new(name: "normal-project-w-default").start_db_dump

      redirect_to project_project_instance_database_dumps_path(@project, @project_instance)
    end

    def update
      @project = find_project
      @project_instance = @project.project_instances.find(params[:project_instance_id])
      @dumps_list = ServerAccess::HerokuDatabase.new(name: "normal-project-w-default").upload(params.require(:dump).fetch(:url))

      redirect_to project_project_instance_database_dumps_path(@project, @project_instance)
    end

    def find_project
      Project.find(params[:project_id])
    end
  end
end
