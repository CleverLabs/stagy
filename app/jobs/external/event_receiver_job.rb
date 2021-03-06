# frozen_string_literal: true

require "utils/encryptor"

module External
  class EventReceiverJob
    include Sidekiq::Worker

    def perform(event, payload)
      build_action = BuildAction.find(payload.fetch("build_action_id"))

      Deployment::ProjectInstanceEvents.new(build_action).create_event(event.split("/").last) if event.in? %w[deployment/status/start deployment/status/success deployment/status/failure]

      configuration = Utils::Encryptor.new.decrypt_json(payload.fetch("encrypted_configuration"))
      configuration = Deployment::Configuration.new(configuration)
      Robad::Events::Handler.new(event, build_action, configuration, payload["block_result"]).call
    end
  end
end
