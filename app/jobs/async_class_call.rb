# frozen_string_literal: true

class AsyncClassCall < ApplicationJob
  def perform(class_name, initializer_arguments, call_arguments)
    class_name.constantize.new(*initializer_arguments).call(call_arguments)
  end
end
