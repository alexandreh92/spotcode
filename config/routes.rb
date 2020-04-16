# frozen_string_literal: true

Rails.application.routes.draw do
  scope :api do
    resources :dashboard, on: :collection, only: [:index]

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
