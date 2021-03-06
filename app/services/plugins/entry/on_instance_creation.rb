# frozen_string_literal: true

module Plugins
  module Entry
    class OnInstanceCreation
      def initialize(info)
        @info = info
      end

      def call
        AwsIntegration::S3Accessor.new.create_bucket(@info.application_name) if @info.addon_names.find { |addon_name| addon_name == "AWS S3" }

        # TODO: return ENV variables and use them
        ReturnValue.ok
      end
    end
  end
end
