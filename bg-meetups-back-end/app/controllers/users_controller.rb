class UsersController < ApplicationController
    def create 
        user = User.new(user_params)
        raise user.valid?.inspect
    end 

    private 

    def user_params
        params.require(:user).permit(:email, :username, :password)
    end 
end
