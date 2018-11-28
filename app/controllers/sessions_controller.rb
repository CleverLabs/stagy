class SessionsController < ApplicationController
  def create
    request.session[:user] = auth_hash if auth_hash
    redirect_to "/"
  end

  def destroy
    request.session[:user] = nil
    redirect_to "/"
  end

  protected

  def auth_hash
    request.env["omniauth.auth"]
  end
end
