class AddRepoColumnsToDeploymentConfigurations < ActiveRecord::Migration[5.2]
  def change
    add_column :deployment_configurations, :private_key, :string
    add_column :deployment_configurations, :repo_path, :string, null: false
    add_column :deployment_configurations, :env_variables, :jsonb, default: {}, null: false
  end
end
