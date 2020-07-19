class SessionsController < ApplicationController
    before_action only: [:destroy] do 
        authenticate_cookie
      end
    
      def destroy
        if current_user 
          cookies.delete(:jwt) 
          render json: "You have successfully logged out", status: :ok and return
        end
          
        render json: {error: "Session Not Found"}, status: :not_found
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
            render json: {error: 'Incorrect Email or Password'}, status: :unprocessable_entity and return 
          end
        
        render json: {error: 'Please Enter an Email and Password'}, status: :unprocessable_entity
      end 

      def logged_in? 
        user = current_user
        if user 
          render json: {
            email: user.email, 
            username: user.username, 
            avatar: url_for(user.avatar),
            id: user.id
          }, status: :ok and return
        end 

        render json: {error: "Not Logged In"}, status: :unprocessable_entity
      end 
end
