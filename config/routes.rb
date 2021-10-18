Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  scope '(:locale)', locale: /hu|en/ do
    root to: 'main#index'
    resources :contacts, only: [:new, :create]
    get 'index', to: 'main#index'
  end
end
