# frozen_string_literal: true

class ApplicationPolicy
  attr_reader :user, :record

  def initialize(user, record)
    @user = user
    @record = record
  end

  def authorize!(action)
    return record if public_send(action)

    raise Pundit::NotAuthorizedError, "Not allowed to #{action} on #{record.inspect}"
  end
end
