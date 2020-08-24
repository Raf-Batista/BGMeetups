class GroupsController < ApplicationController
    
    def index 
        render json: Group.all 
    end 

    def create 
        user = current_user
        group = Group.new(group_params)
        group.user = user 
        group.save
        Membership.create(group_id: group.id, user_id: user.id)
        if group.valid? then render json: group, status: :created and return end

        render json: {errors: "An error occured"}, status: :not_acceptable
    end 

    def update 
        user = current_user 
        group = user.groups.find_by(id: params[:group_id])
        group.update(group_params.reject { |k, v| v.blank? }) if user.id == params[:user_id].to_i
        if group.save then render json: group, status: :ok end and return 

        render json: {errors: "An error occured"}, status: :not_acceptable
    end     

    private 
    
    def group_params 
        params.require(:group).permit(:name, :purpose)
    end 
end
