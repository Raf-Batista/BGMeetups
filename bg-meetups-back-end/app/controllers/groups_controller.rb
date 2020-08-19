class GroupsController < ApplicationController
    def create 
        user = current_user 
        group = user.groups.create(groups_params)

        if group
            render json: group, status: :created and return
        end 

        render json: {errors: "An error occured"}, status: :not_acceptable
    end 

    private 
    
    def groups_params 
        params.permit(:name, :purpose)
    end 
end
