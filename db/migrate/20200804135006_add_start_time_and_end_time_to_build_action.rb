class AddStartTimeAndEndTimeToBuildAction < ActiveRecord::Migration[5.2]
  def change
    add_column :build_actions, :start_time, :datetime
    add_column :build_actions, :end_time, :datetime
  end
end
