# frozen_string_literal: true

module Features
  class Accessor
    def docker_deploy_allowed?(project)
      feature = Flipper[:docker_deploy]
      return false if feature.nil?

      feature.enabled?(project)
    end

    def perform_docker_deploy!(project_instance)
      feature = Flipper[:docker_deployed]
      feature.enable_actor(project_instance)
    end

    def docker_deploy_performed?(project_instance)
      feature = Flipper[:docker_deployed]
      feature.enabled?(project_instance)
    end

    def show_heroku_button?(project)
      feature = Flipper[:show_heroku_button]
      feature.enabled?(project)
    end
  end
end
