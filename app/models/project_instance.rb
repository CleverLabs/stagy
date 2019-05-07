# frozen_string_literal: true

class ProjectInstance < ApplicationRecord
  belongs_to :project
  has_many :build_actions

  validates :deployment_status, :git_reference, :name, presence: true

  enum deployment_status: %i[scheduled deploying running_instances failure canceled destroying_instances instances_destroyed]
end
