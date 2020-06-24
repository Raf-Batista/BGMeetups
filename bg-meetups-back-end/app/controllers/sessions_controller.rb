class SessionsController < ApplicationController
    def create 
        # Refactor 
        # will return false if user does not exist or user can not be authenticated
        user = User.find_by(email: params[:user][:email]) && User.find_by(email: params[:user][:email]).authenticate(params[:user][:password])
        render json: {user: user}, status: :created and return if user
        render json: {error: 'An error occured'}, status: :not_acceptable
    end 
end
