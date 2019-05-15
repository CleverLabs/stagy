# frozen_string_literal: true

class ApplicationController < ActionController::Base
  before_action :login_if_not

  private

  def current_user
    return unless session[:user_id].present?

    @_current_user ||= User.find(session[:user_id])
  end
  helper_method :current_user

  def authenticated?
    current_user.present?
  end
  helper_method :authenticated?

  def login_if_not
    redirect_to sessions_path unless authenticated?
  end
end
