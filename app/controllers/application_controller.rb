class ApplicationController < ActionController::Base
  private

  def current_user
    return unless request.session[:user]
    Github::User.new(request.session[:user])
  end
  helper_method :current_user

  def authenticated?
    current_user.present?
  end
  helper_method :authenticated?
end
