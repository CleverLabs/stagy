# frozen_string_literal: true

module Deployment
  module Repositories
    class ProjectInstanceRepository
      Result = Struct.new(:object, :status)

      def initialize(project)
        @project = project
      end

      def create(name, git_reference)
        object = @project.project_instances.create(deployment_status: :scheduled, git_reference: git_reference, name: name)
        Result.new(object, object.errors.any? ? :error : :ok)
      end
    end
  end
end
