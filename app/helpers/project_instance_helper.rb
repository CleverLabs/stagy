# frozen_string_literal: true

module ProjectInstanceHelper
  def status_alert_class(status)
    alert_class_mapping = {
      Constants::ProjectInstance::SCHEDULED => "alert-info",
      Constants::ProjectInstance::DEPLOYING => "alert-info",
      Constants::ProjectInstance::RUNNING_INSTANCES => "alert-success",
      Constants::ProjectInstance::FAILURE => "alert-danger",
      Constants::ProjectInstance::CANCELED => "alert-warning",
      Constants::ProjectInstance::DESTROYING_INSTANCES => "alert-secondary",
      Constants::ProjectInstance::INSTANCES_DESTROYED => "alert-dark"
    }

    alert_class_mapping.fetch(status.to_sym, "alert-info")
  end
end
