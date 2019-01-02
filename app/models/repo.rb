class Repo < ApplicationRecord
  belongs_to :user
  has_many :secrets
end
