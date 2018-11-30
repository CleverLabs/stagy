# frozen_string_literal: true

require "rails_helper"

describe ApplicationController do
  describe "#current_user" do
    controller(described_class) do
      def index
        render plain: current_user.full_name
      end
    end

    let(:name) { "Name" }
    let(:user_id) { 42 }
    let(:user) { instance_double(User, full_name: name) }

    before do
      expect(User).to receive(:find).with(user_id).and_return(user)
      session[:user_id] = user_id
    end

    it "returns wrapped user" do
      get :index
      expect(response.body).to eql(name)
    end
  end

  describe "#authenticated?" do
    controller(described_class) do
      def index
        render plain: authenticated?
      end
    end

    before do
      session[:user_id] = nil
    end

    it "check is user authenticated" do
      get :index
      expect(response.body).to eql("false")
    end
  end
end
