require 'rails_helper'

RSpec.describe Meetup, type: :model do
  describe 'associations' do 
    it { should belong_to(:group) }
  end 

  describe 'attributes' do 
    it 'should have a time with a datetime format' do 
      group = Group.create(name: 'test', purpose: 'test')
      binding.pry
    end 

    it 'should have an array of those attended' 

    it 'should have an array of those who did not attend'
  end 
end
