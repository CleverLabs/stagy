# frozen_string_literal: true

module Plugins
  module Entry
    class OnRepoCreation
      def initialize(repo_info)
        @repo_info = repo_info
      end

      def call
        ecr_client = AwsIntegration::Ecr.new(@repo_info.project_name, @repo_info.project_id)
        ecr_client.create_for(repo_name: @repo_info.repo_name)

        ReturnValue.ok
      end
    end
  end
end
