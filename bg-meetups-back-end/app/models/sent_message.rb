class SentMessage < ApplicationRecord
    belongs_to :user
    validates :recipient, presence: true
    validates :subject, presence: true
    validates :content, presence: true 
end
