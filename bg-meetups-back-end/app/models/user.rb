class User < ApplicationRecord
    has_secure_password

    validates :username, presence: true 
  # validates :interest, presence: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: true 
    has_many :members 
    has_many :groups, through: :members
    has_many :posts
    has_many :messages
    has_one_attached :avatar
end
