module Github
  class User
    def initialize(omniauth_user)
      @omniauth_user = omniauth_user
    end

    def name
      @omniauth_user.dig("info", "name")
    end
  end
end
