class DeployKeysWorkflow
  COMMENT = "Deployka key"

  def initialize(repo)
    @repo = repo
  end

  def call
    @repo.update!(ssh_keys)
    client.add_deploy_key(
      @repo.path,
      COMMENT,
      ssh_keys.fetch(:public_key)
    )
  end

  private

  def ssh_keys
    @_ssh_keys ||= SshKeys.new.generate
  end

  def client
    @client ||= Octokit::Client.new(access_token: ENV["GITHUB_TOKEN"])
  end
end
