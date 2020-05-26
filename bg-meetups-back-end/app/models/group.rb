class Group < ApplicationRecord
    belongs_to :user
    has_many :meetups 
    has_many :members 
    has_many :users, through: :members
    has_many :posts 
    validates :name, presence: true
    validates :purpose, presence: true  
    validates :status, presence: true  
end
