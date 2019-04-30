# frozen_string_literal: true

module DeploymentProcesses
  class Create
    def initialize(configurations)
      @configurations = configurations
    end

    def call
      @configurations.map do |configuration|
        create_server(configuration)
        push_code_to_server(configuration)
      rescue Excon::Error::UnprocessableEntity => error
        JSON.parse(error.response.data[:body])
      end
    end

    private

    def create_server(configuration)
      server = ServerAccess::Heroku.new(name: configuration.application_name)
      server.create
      server.build_addons
      server.update_env_variables(configuration.env_variables)
    end

    def push_code_to_server(configuration)
      git = GitWrapper.clone(configuration.repo_path, configuration.private_key)
      git.add_remote_heroku(configuration.application_name)
      git.push_heroku("master")
      git.remove_dir
    end
  end
end
