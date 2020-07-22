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
        user = User.handle_login(params["email"], params["password"])
          if user
            token = CoreModules::JsonWebToken.encode({user_id: user.id}, 4.hours.from_now)
            cookies.signed[:jwt] = {value: token, httponly: true}
            render json: user, status: :created and return
          else
            render json: {error: 'Incorrect Email or Password'}, status: :unprocessable_entity and return 
          end
        
        render json: {error: 'Please Enter an Email and Password'}, status: :unprocessable_entity
      end 

      def logged_in? 
        user = current_user
        if user 
          render json: user, status: :ok and return
        end 

        render json: {error: "Not Logged In"}, status: :unprocessable_entity
      end 
end
