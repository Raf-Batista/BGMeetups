class InvitationsController < ApplicationController

    def index 
        user = current_user
        if user then username = user.username end
        invitations = Invitation.get_invitations(username)
        if !!invitations then render json: invitations end
    end 
  
    def create 
        user = current_user
        recipient = User.find_by(username: invitation_params[:recipient])
        group = Group.find_by(id: invitation_params[:group_id])
        group.invitations.new(from: user.username, recipient: recipient.username, invitation_link: encode_invitation(recipient.id, group.id))

        if group.save
            WebNotificationsChannel.broadcast_to(recipient, notification: "#{user.username} sent you an invitation".to_json(), receivedInvitation: group.invitations.last)
            
            render json: {success: "Invitation Sent"}, status: :ok
        end
    end 

    def accept_invitation 
        invitation_id = params[:invitation_id].to_i
        invitation = Invitation.find_by(id: invitation_id)
        encrypted_invitation = params[:invitation]
        decrypted_invitation = decode_invitation(encrypted_invitation)
        new_member_id = decrypted_invitation[:recipient]
        group_id = decrypted_invitation[:group]
        group = Group.find_by(id: group_id)
        group.memberships.build(user_id: new_member_id) 

        if group.save 
            new_member = User.find_by(id: new_member_id)
            invitation.update(active: false)
            # json_group_info = ActiveModelSerializers::SerializableResource.new(group)
            # json_user_info = ActiveModelSerializers::SerializableResource.new(new_member)
            # json_user_info = ActiveModelSerializers::SerializableResource.new(new_member, adapter: :json, serializer: UserSerializer, include: [:username])

        #     json_group_info = ActiveModelSerializers::SerializableResource.new(group, adapter: :json, serializer: GroupSerializer)
        #    # binding.pry
           render json: {user: new_member, group: group, invitation: invitation_id}, status: :ok
        end 
    end 

    private 

    def invitation_params 
        params.permit(:user_id, :group_id, :recipient)
    end 

    def encode_invitation(recipient_id, group_id) 
        #crypt = ActiveSupport::MessageEncryptor.new(Rails.application.secrets.secret_key_base)
        crypt = ActiveSupport::MessageEncryptor.new('CHANGE THIS KEY PLEASE NOW NOW  ')
        encrypted_url = crypt.encrypt_and_sign({recipient: recipient_id, group: group_id})
        URI.encode(encrypted_url)
        
        encrypted_url
    end 

    def decode_invitation(invitation)
        crypt = ActiveSupport::MessageEncryptor.new('CHANGE THIS KEY PLEASE NOW NOW  ')
        decoded_url = URI.decode(invitation)
        decrypted_url = crypt.decrypt_and_verify(decoded_url)

        decrypted_url
    end 

end
