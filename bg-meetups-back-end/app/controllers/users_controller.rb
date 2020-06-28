class UsersController < ApplicationController
    def create # Refactor 
        user = User.new(user_params)
        # attach an identicon as a user's avatar when they are created if a user is valid
        user.avatar.attach(data: Identicon.data_url_for(user.username)) if user.valid?
        render json: {user: user}, status: :created and return if user.save
        render json: {errors: user.errors.full_messages}, status: :not_acceptable and return if !user.save
        render json: {errors: "An error occured"}, status: :not_acceptable
    end 

    private 

    def user_params
        params.require(:user).permit(:email, :username, :password, :avatar)
    end 
end
