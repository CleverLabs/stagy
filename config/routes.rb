# frozen_string_literal: true

Rails.application.routes.draw do
  default_url_options host: ENV["HOST_NAME"], protocol: "https"

  root "home#index"
  get "/auth/slack/callback", to: "slack/authentications#create"
  get "/auth/:provider/callback", to: "sessions#create"
  get "/auth/:provider", to: "sessions#show", as: "omniauth"

  resources :home, only: %i[index]
  resource :sessions, only: %i[show create destroy]

  namespace :webhooks do
    resources :github, only: %i[create]
  end

  resources :projects, only: %i[index new show create] do
    resources :project_instances, only: %i[index show new create destroy] do
      resource :deploy, only: %i[show create], module: :project_instances
      resource :reload, only: %i[create], module: :project_instances
      resource :update, only: %i[create], module: :project_instances
      resources :database_dumps, only: %i[index show create update], module: :project_instances
      resources :build_actions, only: %i[show], module: :project_instances
    end
    resources :deployment_configurations, only: %i[new create edit update]
    resources :deployment_configuration_statuses, only: %i[update]
    resources :project_user_roles, only: %i[destroy create]
  end

  resources :project_instances_counts, only: %i[index]
end
