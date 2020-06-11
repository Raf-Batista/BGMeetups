class UsersController < ApplicationController
    def create 
        user = User.new(user_params)
        render json: {user: user}, status: :created and return if user.save 
        render json: {errors: user.errors.full_messages, status: :precondition_failed} and return if !user.save 
       
        render json: {errors: "An error occured", status: :not_acceptable}
    end 

    private 

    def user_params
        params.require(:user).permit(:email, :username, :password)
    end 
end
