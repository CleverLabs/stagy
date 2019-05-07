# frozen_string_literal: true

module Deployment
  module ServerActions
    class Restart
      def initialize(configurations)
        @configurations = configurations
      end

      def call
        @configurations.each do |configuration|
          ServerAccess::Heroku.new(name: configuration.application_name).restart
        end
      end
    end
  end
end
