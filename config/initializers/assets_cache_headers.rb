# frozen_string_literal: true

# This will affect assets served from /app/assets
Rails.application.config.static_cache_control = "public, max-age=31536000"

# This will affect assets in /public, e.g. webpacker assets.
Rails.application.config.public_file_server.headers = {
  "Cache-Control" => "public, max-age=604800",
  "Expires" => 7.day.from_now.to_formatted_s(:rfc822)
}
