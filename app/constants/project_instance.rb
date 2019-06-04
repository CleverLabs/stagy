# frozen_string_literal: true

module ProjectInstance
  DEPLOYMENT_STATUSES = [
    SCHEDULED = :scheduled,
    DEPLOYING = :deploying,
    UPDATING = :updating,
    RUNNING_INSTANCES = :running_instances,
    FAILURE = :failure,
    CANCELED = :canceled,
    DESTROYING_INSTANCES = :destroying_instances,
    INSTANCES_DESTROYED = :instances_destroyed
  ].freeze

  DEPLOYMENT_STATUSES_HUMANISED = {
    SCHEDULED => "scheduled",
    DEPLOYING => "deploying",
    UPDATING => "updating",
    RUNNING_INSTANCES => "running",
    FAILURE => "failed",
    CANCELED => "canceled",
    DESTROYING_INSTANCES => "destroying",
    INSTANCES_DESTROYED => "destroyed"
  }.freeze
end
