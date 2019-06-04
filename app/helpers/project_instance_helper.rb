# frozen_string_literal: true

module ProjectInstanceHelper
  def status_alert_class(status)
    alert_class_mapping = {
      ProjectInstance::SCHEDULED => "alert-info",
      ProjectInstance::DEPLOYING => "alert-info",
      ProjectInstance::RUNNING_INSTANCES => "alert-success",
      ProjectInstance::FAILURE => "alert-danger",
      ProjectInstance::CANCELED => "alert-warning",
      ProjectInstance::DESTROYING_INSTANCES => "alert-secondary",
      ProjectInstance::INSTANCES_DESTROYED => "alert-dark"
    }

    alert_class_mapping.fetch(status.to_sym, "alert-info")
  end
end
