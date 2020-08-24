Rails.application.routes.default_url_options[:host] = "localhost"

Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users do #, only: [:index, :create, :edit, :delete]
    resources :messages
  end 

  resources :users do #, only: [:index, :create, :edit, :delete]
    resources :groups
  end 
  get '/groups', to: 'groups#index'
  post '/sessions', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/current_user', to: 'sessions#logged_in?'

  mount ActionCable.server => '/cable'
end
