class ChangeRepositoriesIndex < ActiveRecord::Migration[5.2]
  def change
    safety_assured do
      add_index :repositories, [:integration_id, :integration_type], unique: true
      remove_index :repositories, [:project_id, :integration_id, :integration_type]
    end
  end
end
