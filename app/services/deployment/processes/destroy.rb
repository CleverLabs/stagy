# frozen_string_literal: true

module Deployment
  module Processes
    class Destroy
      def initialize(configurations)
        @configurations = configurations
      end

      def call
        @configurations.each do |configuration|
          server = ServerAccess::Heroku.new(name: configuration.application_name)
          server.destroy
        end
      end
    end
  end
end
