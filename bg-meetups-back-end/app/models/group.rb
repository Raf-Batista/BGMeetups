class Group < ApplicationRecord
    belongs_to :user
    has_many :meetups 
    has_many :group_members 
    has_many :users, through: :group_members
    has_many :posts 
    validates :purpose, presence: true  
    validates :status, presence: true  
end
