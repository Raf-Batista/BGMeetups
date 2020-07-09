class User < ApplicationRecord
    has_secure_password

    validates :username, uniqueness: true, presence: true 
  # validates :interest, presence: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: true, presence: true
    has_many :members 
    has_many :groups, through: :members
    has_many :posts
    has_many :messages
    has_one_base64_attached :avatar

    def self.handle_login(email, password)
      user = User.find_by(email: email.downcase)
      if user && user.authenticate(password)
        user_info = {}
        user_info[:token] = CoreModules::JsonWebToken.encode({user_id: user.id}, 4.hours.from_now)
        user_info[:id] = user.id
        user_info[:username] = user.username
        user_info[:email] = user.email
        user_info[:avatar] = user.avatar
        return user_info
      end
        
     return false
    end
end
