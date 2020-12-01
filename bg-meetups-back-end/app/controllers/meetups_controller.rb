class MeetupsController < ApplicationController

    def create 
        group_id = meetups_params[:group_id]
        meetup_time = meetups_params[:meetup_time]

        group = Group.find_by(:id params[:group_id]) 
        group.meetups.create(meetup_time: meetup_time)

        if group.valid? then render json: group, status: :created and return end

        render json: {errors: "An error occured"}, status: :not_acceptable
    end 

    private 

    def meetups_params 
        params.permit(:meetup_time, :group_id)
    end 
end
