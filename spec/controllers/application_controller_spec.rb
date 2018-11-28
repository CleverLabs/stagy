# frozen_string_literal: true

require "rails_helper"

describe ApplicationController do
  describe "#current_user" do
    controller(described_class) do
      def index
        render plain: current_user.name
      end
    end

    let(:name) { "Name" }
    let(:user) { instance_double(Github::User, name: name) }

    before do
      expect(Github::User).to receive(:new).and_return(user)
      session[:user] = {id: 1}
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
      session[:user] = nil
    end

    it "check is user authenticated" do
      get :index
      expect(response.body).to eql("false")
    end
  end
end
