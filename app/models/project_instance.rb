# frozen_string_literal: true

class ProjectInstance < ApplicationRecord
  belongs_to :project
  has_many :build_actions

  validates :deployment_status, :git_reference, :name, presence: true

  enum deployment_status: Constants::ProjectInstance::DEPLOYMENT_STATUSES
end
