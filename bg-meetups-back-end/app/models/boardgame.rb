class Boardgame < ApplicationRecord
    belongs_to :user
    validates :name, presence: true 
    validates :description, presence true 
    validates :price, presence true 
    has_many_attached :images
end
