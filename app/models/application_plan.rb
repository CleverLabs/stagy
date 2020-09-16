# frozen_string_literal: true

class ApplicationPlan < ApplicationRecord
  has_paper_trail

  validates :name, :sleep_cents, :run_cents, :build_cents, presence: true
end
