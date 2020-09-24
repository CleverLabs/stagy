# frozen_string_literal: true

class LandingsController < ApplicationController
  skip_before_action :login_if_not

  layout "landing"

  def index
    render :index
  end

  def roles
    render :roles
  end

  def pricing
    render :pricing
  end

  def faq
    render :faq
  end

  def create
    return redirect_to("/") if params[:email].blank?

    WaitingList.create(email: params[:email])
    render :done, layout: false
  end
end
