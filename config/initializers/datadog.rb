# frozen_string_literal: true

require "ddtrace"
require "net/http"

if ENV["DATADOG"]
  Datadog.configure do |config|
    config.tracer hostname: Net::HTTP.get(URI("http://169.254.169.254/latest/meta-data/local-ipv4"))
    config.use :rails
  end
end
