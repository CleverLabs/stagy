# frozen_string_literal: true

module Constants
  module ProjectInstance
    DEPLOYMENT_STATUSES = [
      SCHEDULED = :scheduled,
      DEPLOYING = :deploying,
      RUNNING_INSTANCES = :running_instances,
      FAILURE = :failure,
      CANCELED = :canceled,
      DESTROYING_INSTANCES = :destroying_instances,
      INSTANCES_DESTROYED = :instances_destroyed
    ].freeze

    DEPLOYMENT_STATUSES_HUMANISED = {
      SCHEDULED => "scheduled",
      DEPLOYING => "deploying",
      RUNNING_INSTANCES => "running",
      FAILURE => "failed",
      CANCELED => "canceled",
      DESTROYING_INSTANCES => "destroying",
      INSTANCES_DESTROYED => "destroyed"
    }.freeze
  end
end
