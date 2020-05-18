class AddTimestampsToUsers < ActiveRecord::Migration[5.2]
  User = Class.new(ActiveRecord::Base)

  def up
    safety_assured do
      add_timestamps :users, null: true 

      starting_date = DateTime.new(2020, 1, 1)
      User.update_all(created_at: starting_date, updated_at: starting_date)

      change_column_null :users, :created_at, false
      change_column_null :users, :updated_at, false
    end
  end
end
