class RemoveDeploymentConfigurationIdFromProjectInstances < ActiveRecord::Migration[5.2]

  # I'm removing this columns because there will be no need of connecting project instance
  #   to deployment configuration - by default, all deployment configurations will be deployed
  #   for one instance.
  # Old idea was to have several deployment_configuration, so you can chose what you want to deploy, but
  #   for now I've decided to abandon this idea.
  # Probably there will be some connection, since user might want to deploy only several deployment_configuration.
  def change
    remove_column :project_instances, :deployment_configuration_id, :bigint
  end
end
