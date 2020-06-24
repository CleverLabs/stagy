# frozen_string_literal: true

require "ddtrace"
require "net/http"

if ENV["DATADOG"].present?
  Datadog.configure do |config|
    config.tracer hostname: Net::HTTP.get(URI("http://169.254.169.254/latest/meta-data/local-ipv4"))
    config.use :rails
    config.use :sidekiq, service_name: "deployqa-worker"
  end
end
