class UsersController < ApplicationController

    def index 
        render json: User.all
    end 

    def create # Refactor 
        user = User.new(user_params)
        # attach an identicon as a user's avatar if they are created
        user.avatar.attach(data: Identicon.data_url_for(user.username)) if user.valid?
        render json: {user: {email: user.email, username: user.username}}, status: :created and return if user.save
        render json: {errors: user.errors.full_messages}, status: :not_acceptable and return if !user.save
        
        render json: {errors: "An error occured"}, status: :not_acceptable
    end 

    private 

    def user_params
        params.permit(:email, :username, :password)
    end 
end
