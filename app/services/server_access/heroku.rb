# frozen_string_literal: true

module ServerAccess
  class Heroku
    def initialize(name:)
      @heroku = PlatformAPI.connect_oauth(ENV["HEROKU_TOKEN"])
      @name = name
    end

    def create
      @heroku.app.create(name: @name)
    end

    def build_addons
      @heroku.addon.create(@name, { plan: 'heroku-postgresql:hobby-basic' })
    end

    def update; end

    def restart
      @heroku.dyno.restart_all(@name)
    end

    def destroy
      @heroku.app.delete(@name)
    end
  end
end
