Rails.application.routes.default_url_options[:host] = "localhost"

Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users #, only: [:index, :create, :edit, :delete]
  post '/sessions', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/current_user', to: 'sessions#logged_in?'
end
