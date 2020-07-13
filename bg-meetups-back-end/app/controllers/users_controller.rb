class UsersController < ApplicationController

    def index 
        render json: User.all
    end 

    def create # Refactor 
        user = User.new(user_params)
        # attach an identicon as a user's avatar if they are created
        user.avatar.attach(data: Identicon.data_url_for(user.username)) if user.valid?

        if user.save 
            token = CoreModules::JsonWebToken.encode({user_id: user.id}, 4.hours.from_now)
            cookies.signed[:jwt] = {value: token, httponly: true}
            render json: {
                email: user.email, 
                username: user.username, 
                avatar: url_for(user.avatar)
            }, status: :created and return
        else 
            render json: {errors: user.errors.full_messages}, status: :not_acceptable and return
        end  

        render json: {errors: "An error occured"}, status: :not_acceptable
    end 

    private 

    def user_params
        params.permit(:email, :username, :password)
    end 
end
