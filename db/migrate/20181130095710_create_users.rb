class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :auth_provider, null: false
      t.string :auth_uid, null: false
      t.string :full_name
    end
  end
end
