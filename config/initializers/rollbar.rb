# frozen_string_literal: true

Rollbar.configure do |config|
  def git_sha_for_rollbar
    # we don't copy .git folder, so we cannot know which commit it is
    # Git.open(".").object("HEAD").sha
    ""
  end

  config.access_token = ENV["ROLLBAR_POST_SERVER_ITEM_TOKEN"]
  config.code_version = git_sha_for_rollbar

  config.before_process = proc do |options|
    raise Rollbar::Ignore if options[:exception].is_a?(ActionController::RoutingError)
  end
end
