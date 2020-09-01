class Membership < ApplicationRecord
    belongs_to :user 
    belongs_to :group

    validates_uniqueness_of :user_id, :scope => :group_id, :message => "You already belong to this group"
end