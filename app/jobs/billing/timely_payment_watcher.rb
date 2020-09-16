# frozen_string_literal: true

module Billing
  class TimelyPaymentWatcher < ApplicationJob
    def perform
      Project.joins(:billing_info).where(billing_infos: { active: true }).includes(:billing_info).find_each do |project|
        project_domain = ProjectDomain.new(record: project)
        next if project_domain.last_invoice_payed?

        project_domain.billing.deactivate! if DateTime.now - 7.days > project_domain.billing
      end
    end
  end
end
