# frozen_string_literal: true

module Deployment
  class Configuration
    include ShallowAttributes

    attribute :application_name, String
    attribute :env_variables, Hash
    attribute :repository_id, Integer
    attribute :application_url, String
    attribute :seeds_command, String
    attribute :migration_command, String
    attribute :schema_load_command, String
    attribute :addons, Array, of: Deployment::Addon
    attribute :web_processes, Array, of: Deployment::WebProcess
    attribute :repo_configuration, Deployment::RepoConfiguration
    attribute :build_configuration, Deployment::BuildConfiguration
    attribute :heroku_buildpacks, Array, of: String

    def to_project_instance_configuration
      to_h.slice(:application_name, :repository_id, :application_url, :env_variables, :web_processes, :addons, :build_configuration)
          .merge(repo_configuration.to_h.slice(:git_reference, :repo_path))
    end

    # Temporary solution
    def add_private_key(private_key)
      return self unless repo_configuration.project_integration_type == ProjectsConstants::Providers::VIA_SSH

      repo_configuration.project_integration_id = private_key
      self
    end

    def docker?
      build_configuration.build_type == RepositoryConstants::DOCKER
    end

    def db_addon_present?
      addons.find { |addon| addon.addon_type == AddonConstants::Types::RELATIONAL_DB }
    end

    def fill_seeds?
      db_addon_present? && seeds_command.present?
    end
  end
end
