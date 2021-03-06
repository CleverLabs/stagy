# frozen_string_literal: true

require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Stagy
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.0

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.

    config.autoload_paths += %W[
      #{config.root}/app/constants
      #{config.root}/app/domains
      #{config.root}/app/errors
      #{config.root}/app/pages
      #{config.root}/lib
    ]

    config.eager_load_paths += %W[
      #{config.root}/app/domains
      #{config.root}/lib/provider_api/*
      #{config.root}/lib/utils/*
    ]

    config.i18n.load_path += Dir[Rails.root.join("config/locales/**/*.{rb,yml}").to_s]

    config.active_job.queue_adapter = :sidekiq

    config.action_dispatch.rescue_responses["Pundit::NotAuthorizedError"] = :not_found
  end
end
