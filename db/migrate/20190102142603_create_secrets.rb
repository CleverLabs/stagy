class CreateSecrets < ActiveRecord::Migration[5.2]
  def change
    create_table :secrets do |t|
      t.integer :repo_id, null: false
      t.string :key, null: false
      t.string :value, null: false
    end
  end
end
