class AddNameToProjectInstances < ActiveRecord::Migration[5.2]
  def change
    add_column :project_instances, :name, :string, null: false
  end
end
