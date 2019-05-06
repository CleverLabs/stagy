# frozen_string_literal: true

class AsyncClassCall < ApplicationJob
  def perform(class_name, initializer_arguments, call_arguments)
    instance = initializer_arguments.present? ? class_name.constantize.new(*initializer_arguments) : class_name.constantize.new
    call_arguments.present? ? instance.call(call_arguments) : instance.call
  end
end
