# frozen_string_literal: true

module GitProviders
  module Url
    class NewRepository
      NEW_REPOSITORY_URL_MAPPING = {
        ProjectsConstants::Providers::GITHUB => ->(_url_helpers, _project) { Github::Router.new.additional_installation_url },
        ProjectsConstants::Providers::GITLAB => ->(url_helpers, project) { url_helpers.new_project_gitlab_repository_path(project) },
        ProjectsConstants::Providers::VIA_SSH => ->(url_helpers, project) { url_helpers.new_project_repository_path(project) }
      }.freeze

      def initialize(project)
        @project = project
      end

      def call
        NEW_REPOSITORY_URL_MAPPING.fetch(@project.integration_type).call(Rails.application.routes.url_helpers, @project)
      end
    end
  end
end
