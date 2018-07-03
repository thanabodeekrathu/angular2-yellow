Rails.application.routes.draw do
  root 'home#index'
  if Figaro.env.rails_admin_path?
    mount RailsAdmin::Engine => "/#{Figaro.env.rails_admin_path}", as: 'rails_admin'
  end
  devise_for :users

  authenticated :user do
    root to: 'home#index'
  end

  resources :users, only: [:index, :show]
  resources :my_datas, only: [:index, :update, :create] do
    collection do 
      # get 'texttexttext', to: 'my_datas#texttexttext'
      get 'texttexttext'
    end
  end

  # root to: redirect('/users/sign_in')
end
