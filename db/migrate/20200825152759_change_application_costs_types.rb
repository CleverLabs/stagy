class ChangeApplicationCostsTypes < ActiveRecord::Migration[6.0]
  def change
    safety_assured do
      change_column :application_costs, :sleep_cents, :decimal
      change_column :application_costs, :run_cents, :decimal
      change_column :application_costs, :build_cents, :decimal
    end
  end
end
