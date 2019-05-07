class ChangeTypeOfDeploymentStatus < ActiveRecord::Migration[5.2]
  def up
    change_column :project_instances, :deployment_status, "integer USING deployment_status::integer"
  end
end
