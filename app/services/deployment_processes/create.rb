# frozen_string_literal: true

module DeploymentProcesses
  class Create
    def initialize(repo_path, private_key, instance_name)
      @repo_path = repo_path
      @private_key = private_key
      @instance_name = instance_name
    end

    def call
      server = ServerAccess::Heroku.new(name: heroku_application_name)
      server.create
      server.build_addons

      git = GitWrapper.clone(@repo_path, @private_key)
      git.add_remote_heroku(heroku_application_name)
      git.push_heroku("master")
      git.remove_dir
    rescue Excon::Error::UnprocessableEntity => error
      JSON.parse(error.response.data[:body])
    end

    private

    def heroku_application_name
      "organization-project-#{@instance_name}"
    end
  end
end
