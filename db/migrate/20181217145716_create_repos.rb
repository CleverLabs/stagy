class CreateRepos < ActiveRecord::Migration[5.2]
  def change
    create_table :repos do |t|
      t.string :path, null: false
      t.integer :user_id, null: false
      t.string :public_key
      t.string :private_key
    end
  end
end
