class Secret < ApplicationRecord
  belongs_to :repo

  validates :key, presence: true
  validates :value, presence: true
end
