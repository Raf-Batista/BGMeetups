class ReceivedMessage < ApplicationRecord
    belongs_to :user 
    validates :from, presence: true
    validates :subject, presence: true 
    validates :content, presence: true
end 