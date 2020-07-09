class SessionsController < ApplicationController
    before_action only: [:destroy] do 
        authenticate_cookie
      end
    
      def destroy
        if current_user 
          cookies.delete(:jwt) 
          render json: {status: 'OK', code: 200} and return
        end
          
        render json: {status: 'session not found', code: 404}
      end
    
      def create
        login_hash = User.handle_login(params["email"], params["password"])
          if login_hash
            cookies.signed[:jwt] = {value: login_hash[:token], httponly: true}
            render json: { 
              id: login_hash[:id],
              username: login_hash[:username],
              email: login_hash[:email],
              avatar: url_for(login_hash[:avatar])
            }, status: :created, adapter: :json and return
          else
            render json: {status: 'incorrect email or password', code: 422} and return 
          end
        
        render json: {status: 'specify email address and password', code: 422}
      end 
end
