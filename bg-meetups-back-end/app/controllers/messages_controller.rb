class MessagesController < ApplicationController
    def create 
        user = current_user
        user.sent_messages.new(message_params)
        recipient = User.find_by(username: message_params[:recipient])
        recipient.received_messages.new(from: user.username, subject: message_params[:subject], content: message_params[:content])
        if user.valid? && recipient.valid?
            user.save && recipient.save
            WebNotificationsChannel.broadcast_to(recipient, notification: "#{user.username} sent you a message".to_json(), receivedMessage: recipient.received_messages.last)
            
            render json: user.sent_messages.last
        end
    end 

    private 

    def message_params 
        params.permit(:recipient, :subject, :content)
    end
end
