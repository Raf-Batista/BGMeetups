class Super < ApplicationRecord
    has_secure_password 

    validates :name, presence: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: true 
end