class MessagesController < ApplicationController
    def create 
        user = current_user
        message = Message.new(message_params) 
        message.sender = user.username 
        message.user = user
        recipient = User.find_by(username: message_params[:recipient])
        message.recipient = recipient.username
        if message.save
            WebNotificationsChannel.broadcast_to(recipient, message: "#{user.username} sent you a message".to_json())
            render json: {message: "success"}
        end
    end 

    private 

    def message_params 
        params.permit(:recipient, :subject, :content)
    end
end
