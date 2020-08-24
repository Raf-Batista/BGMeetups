class User < ApplicationRecord
    has_secure_password

    validates :username, uniqueness: true, presence: true 
  # validates :interest, presence: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: true, presence: true
    has_many :memberships
    has_many :groups, through: :memberships
    # has_many :owned_groups, class_name: "Group", foreign_key: :group_id 
    # has_many :memberships, class_name: "Group", foreign_key: :group_id
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
