class MessagesController < ApplicationController
    def create 
      #  binding.pry
        user = current_user
        user.sent_messages.new(message_params)
      #  message.sender = user.username 
        recipient = User.find_by(username: message_params[:recipient])
        recipient.received_messages.new(from: user.username, subject: message_params[:subject], content: message_params[:content])
        if user.valid? && recipient.valid?
            user.save 
            recipient.save
            WebNotificationsChannel.broadcast_to(recipient, message: "#{user.username} sent you a message".to_json())
            render json: {message: "success"}
        end
    end 

    private 

    def message_params 
        params.permit(:recipient, :subject, :content)
    end
end
