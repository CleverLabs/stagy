class AddPrivateKeyAndPublicKeyToDeploymentConfiguration < ActiveRecord::Migration[5.2]
  def change
    add_column :deployment_configurations, :public_key, :string
  end
end
