# frozen_string_literal: true

module Deployment
  module Repositories
    class ProjectInstanceRepository
      Result = Struct.new(:object, :status)

      def initialize(project, project_instance = :no_project_instance)
        @project = project
        @project_instance = project_instance
      end

      def create(name, git_reference, configurations)
        object = @project.project_instances.create(deployment_status: :scheduled, git_reference: git_reference, name: name, configurations: configurations)
        Result.new(object, object.errors.any? ? :error : :ok)
      end

      def update(deployment_status:)
        Result.new(@project_instance, @project_instance.update(deployment_status: deployment_status) ? :error : :ok)
      end
    end
  end
end
