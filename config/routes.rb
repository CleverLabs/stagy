Rails.application.routes.draw do
  root "home#index"
  get "/auth/:provider/callback", to: "sessions#create"
  resources :home, only: %i[index]
  resource :sessions, only: %i[create destroy]
  resources :repos, only: %i[create show index]
end
