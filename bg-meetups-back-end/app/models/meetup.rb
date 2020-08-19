class Meetup < ApplicationRecord
    belongs_to :group
    validates :meetup_time, presence: true
end
