# frozen_string_literal: true

module Billing
  module Lifecycle
    class Timeframe
      attr_reader :start, :end

      def self.by_invoice(last_invoice)
        start = last_invoice ? last_invoice.end_time + 0.001 : DateTime.now.beginning_of_month
        new(start, start.end_of_month)
      end

      def self.month_until_today(date_now)
        new(date_now.beginning_of_month, date_now.beginning_of_day)
      end

      def initialize(start_time, end_time)
        @start = start_time
        @end = end_time
      end

      def to_s
        "start: #{start}, end: #{self.end}"
      end
    end
  end
end
