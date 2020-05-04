require 'rails_helper'

RSpec.describe Group, type: :model do
  describe 'associations' do
    it {should have_many(:meetups)}
    it {should have_many(:users).through(:group_members)}
    it {should belong_to(:user)}
    it {should have_many(:posts)}
  end
  
  describe 'attributes' do 
    it {should validate_presence_of(:purpose)}
    it {should validate_presence_of(:status)}
  end 
end
