# frozen_string_literal: true

ApplicationCost.seed(:name) do |seed|
  seed.name = "default"
  seed.sleep_cents = 0.2
  seed.run_cents = 3
  seed.build_cents = 4.5
end
