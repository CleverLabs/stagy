# frozen_string_literal: true

class GitWrapper
  def self.clone(repo)
    clone_repo = CloneRepo.new(repo).tap(&:call)
    new(Git.open(clone_repo.repo_dir))
  end

  def initialize(git_client)
    @git_client = git_client
  end

  def add_remote_heroku(heroku_app_name)
    @git_client.add_remote("heroku", "https://git.heroku.com/#{heroku_app_name}.git")
  end

  def push_heroku(branch)
    @git_client.push("heroku", "#{branch}:master", f: true)
  end
end
