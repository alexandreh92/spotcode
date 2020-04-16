# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users
  get 'home/index'
  root 'home#index'

  # Fallback Routes to React
  get '*path', to: 'application#fallback_index_html', constraints: lambda { |request|
    !request.xhr? && request.format.html?
  }
end
