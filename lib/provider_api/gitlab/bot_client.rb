# frozen_string_literal: true

module ProviderApi
  module Gitlab
    class BotClient
      delegate :merge_request, :merge_request_discussions, to: :gitlab_client

      def initialize
        @access_token = Configs::Gitlab.deployqa_bot_token
        @gitlab_client = ::Gitlab.client(private_token: access_token)
      end

      def clone_repository_uri(repo_path)
        "https://gitlab.com:#{access_token}@gitlab.com/#{repo_path}.git"
      end

      def repository_webhook_token(repo_id)
        OpenSSL::HMAC.hexdigest(OpenSSL::Digest.new("SHA1"), Configs::Gitlab.webhook_secret, repo_id.to_s)
      end

      def update_mr_description(repository_id, merge_request_id, text)
        gitlab_client.update_merge_request(repository_id, merge_request_id, description: text)
      end

      def update_mr_comment(repository_id, merge_request_id, discussion_id, comment_id, text)
        gitlab_client.update_merge_request_discussion_note(repository_id, merge_request_id, discussion_id, comment_id, body: text)
      end

      def create_mr_comment(repository_id, merge_request_id, text)
        gitlab_client.create_merge_request_discussion(repository_id, merge_request_id, body: text)
      end

      private

      attr_reader :access_token, :gitlab_client
    end
  end
end
