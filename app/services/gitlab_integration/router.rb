# frozen_string_literal: true

module GitlabIntegration
  class Router
    GITLAB_HOST = "https://gitlab.com/"

    def merge_request_url(repo_path, mr_number)
      GITLAB_HOST + "#{repo_path}/merge_requests/#{mr_number}"
    end

    def page_url(page_id)
      GITLAB_HOST + page_id
    end
  end
end
