class AddPaymentAcceptedToInvoices < ActiveRecord::Migration[6.0]
  def change
    safety_assured do
      add_column :invoices, :payment_accepted, :boolean, null: false, default: false
    end
  end
end
