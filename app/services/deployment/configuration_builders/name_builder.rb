# frozen_string_literal: true

module Deployment
  module ConfigurationBuilders
    class NameBuilder
      def application_name(project_name, project_id, repo_name, instance_name)
        name = application_name_prefix(project_name, project_id) + "#{repo_name}-#{instance_name}"
        Utils::NameSanitizer.sanitize_downcase(name)
      end

      def application_name_prefix(project_name, project_id)
        Utils::NameSanitizer.sanitize_downcase("#{project_name}-#{project_id}-")
      end

      def external_project_name(project_name, project_id)
        "deployqa-project-#{project_name}-#{project_id}"
      end

      def external_resource_name(application_name)
        "deployqa-resource-#{application_name}"
      end
    end
  end
end
