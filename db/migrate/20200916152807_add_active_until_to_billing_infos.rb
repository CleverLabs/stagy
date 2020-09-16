class AddActiveUntilToBillingInfos < ActiveRecord::Migration[6.0]
  BillingInfo = Class.new(ActiveRecord::Base)

  def change
    safety_assured do
      add_timestamps :billing_infos, null: true
      add_column :billing_infos, :active_until, :datetime

      BillingInfo.update_all(active_until: Date.today + 2.month, created_at: Date.today, updated_at: Date.today)

      change_column_null :billing_infos, :active_until, false
      change_column_null :billing_infos, :created_at, false
      change_column_null :billing_infos, :updated_at, false
    end
  end
end
