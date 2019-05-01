# frozen_string_literal: true

module DeploymentProcesses
  class Update
    def initialize(configurations)
      @configurations = configurations
    end

    def call
      @configurations.each do |configuration|
        DeploymentProcesses::Helpers::PushCodeToServer.new(configuration).call
        ServerAccess::Heroku.new(name: configuration.application_name).migrate_db
      end
    end
  end
end
