# frozen_string_literal: true

class AdminPanelPolicy < ApplicationPolicy
  def show?
    user.system_role == UserConstants::SystemRoles::ADMIN
  end
end
