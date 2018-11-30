module Github
  class User
    PROVIDER = "github"

    def initialize(omniauth_user)
      @omniauth_user = omniauth_user
    end

    def identify
      ::User.find_or_create_by!(user_uniq_id).tap do |user|
        user.update(full_name: full_name) unless user.full_name == full_name
      end
    end

    private

    def full_name
      @omniauth_user.dig("info", "name")
    end

    def user_uniq_id
      {auth_provider: PROVIDER, auth_uid: Integer(@omniauth_user["uid"])}
    end
  end
end
