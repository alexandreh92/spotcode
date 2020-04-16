# frozen_string_literal: true

Rails.application.routes.draw do
  concern :favoritable do |options|
    shallow do
      post '/favorite', { to: 'favorites#create', on: :member }.merge(options)
      delete '/favorite', { to: 'favorites#destroy', on: :member }.merge(options)
    end
  end

  scope :api do
    resources :dashboard, on: :collection, only: [:index]
    resources :categories, on: :collection, only: %i[index show]
    resources :search, on: :collection, only: [:index]
    resources :albums, on: :collection, only: [:show] do
      resources :recently_heard, only: [:create]
      concerns :favoritable, favoritable_type: 'Album'
    end
    resources :favorites, on: :collection, only: %i[index]
    resources :songs, on: :collection, only: [] do
      concerns :favoritable, favoritable_type: 'Song'
    end

    # Devise
    devise_for :users,
               path: '',
               path_names: {
                 sign_in: 'sessions',
                 sign_out: 'logout'
               },
               controllers: {
                 sessions: 'sessions',
                 registrations: 'registrations'
               }
  end

  # Fallback Routes to React
  get '*path', to: 'application#fallback_index_html', constraints: lambda { |request|
    !request.xhr? && request.format.html?
  }
end
