class AddCongigurationToProjectInstances < ActiveRecord::Migration[5.2]
  def change
    add_column :project_instances, :configurations, :jsonb, default: {}, null: false
  end
end
