# frozen_string_literal: true

require "rails_helper"

describe SessionsController do
  let(:omniauth) { "user_hash" }

  describe "#create" do
    before do
      request.env["omniauth.auth"] = omniauth
      session[:user] = nil
    end

    it "saves omniauth object to session" do
      post :create

      expect(response).to redirect_to("/")
      expect(session[:user]).to eql(omniauth)
    end
  end

  describe "#delete" do
    before do
      session[:user] = omniauth
    end

    it "clears request's session object" do
      delete :destroy

      expect(response).to redirect_to("/")
      expect(session[:user]).to be_nil
    end
  end
end
