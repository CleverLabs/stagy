# frozen_string_literal: true

require "utils/encryptor"

module Robad
  class Executor
    def initialize(build_action)
      return if build_action == :not_needed

      @build_action_id = build_action.id
      @action = build_action.action.to_sym
    end

    def action_call(configurations)
      configurations.each do |configuration|
        data = Utils::Encryptor.new.encrypt(configuration.to_json)

        Sidekiq::Client.push(
          "class" => "Robad::Workers::ActionCall",
          "queue" => "robad",
          "args" => [data, @action, @build_action_id]
        )
      end
    end

    def update_sleep_instance(addresses)
      Sidekiq::Client.push(
        "class" => "Robad::Workers::SleepyInstanceUpdate",
        "queue" => "robad",
        "args" => [addresses, Time.now.to_i]
      )
    end
  end
end
