class Application
  def initialize(repo, pull_id)
    @repo = repo
    @pull_id = pull_id
  end

  def slug
    [*@repo.path.split("/"), payload.number].join("-")
  end

  def branch
    payload.head.ref
  end

  private

  def payload
    @_payload ||= client.pull_request(@repo.path, @pull_id)
  end

  def client
    @_client ||= Octokit::Client.new(access_token: ENV["GITHUB_TOKEN"])
  end
end
