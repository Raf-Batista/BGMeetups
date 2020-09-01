class Invitation < ApplicationRecord
    belongs_to :group 
    validates :from, presence: true 
    validates :recipient, presence: true 
    validates :invitation_link, presence: true

    def self.get_invitations(user) 
        invitations = Invitation.all 

        invitations.select do |invitation| 
            invitation.recipient == user && invitation.active
        end 
    end 

    def group_name 
        self.group.name
    end 
end
