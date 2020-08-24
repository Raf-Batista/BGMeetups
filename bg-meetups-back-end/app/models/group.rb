class Group < ApplicationRecord
    belongs_to :user
    # belongs_to :owner, class_name: "User", foreign_key: :user_id
    # has_many :members, class_name: "User", foreign_key: :id
    has_many :meetups 
    has_many :memberships 
    has_many :users, through: :members
    has_many :posts 
    validates :name, presence: true
    validates :purpose, presence: true  
    validates :status, presence: true  

    def owner 
        self.user.username
    end 

    def get_members 
        self.memberships.map do |member| 
            user = User.find_by(id: member.user_id)
            user.username
        end
    end 
end
