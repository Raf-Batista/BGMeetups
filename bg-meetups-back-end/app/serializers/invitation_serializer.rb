class InvitationSerializer < ActiveModel::Serializer
  attributes :id, :from, :recipient, :invitation_link, :group_name 

end
