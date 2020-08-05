class FillStartTimeEndTimeInBuildActions < ActiveRecord::Migration[5.2]
  BuildAction = Class.new(ActiveRecord::Base)

  def up
    BuildAction.find_each do |build_action|
      build_action.update_columns(start_time: build_action.created_at, end_time: build_action.updated_at)
    end
  end
end
