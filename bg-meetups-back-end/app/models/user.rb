class User < ApplicationRecord
    has_secure_password

    validates :username, uniqueness: true, presence: true 
  # validates :interest, presence: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: true, presence: true
    has_many :members 
    has_many :groups, through: :members
    has_many :posts
    has_many :sent_messages
    has_many :received_messages
    has_one_base64_attached :avatar
    has_many :boardgames

    def self.handle_login(email, password)
      user = User.find_by(email: email.downcase)
      if user && user.authenticate(password)
        return user
      end
        
     return false
    end
end
