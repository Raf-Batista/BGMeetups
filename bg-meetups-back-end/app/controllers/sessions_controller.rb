class SessionsController < ApplicationController
    def create 
        # Refactor 
        # will return false if user does not exist or user can not be authenticated
        user = User.find_by(email: params[:email]) && User.find_by(email: params[:email]).authenticate(params[:password])
        render json: {user: user}, status: :created and return if user
        render json: {error: 'An error occured'}, status: :not_acceptable
    end 
end
