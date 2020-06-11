require 'rails_helper'

RSpec.describe Meetup, type: :model do
  describe 'associations' do 
    it { should belong_to(:group) }
  end 

  describe 'attributes' do 
    it 'should have a time with a datetime format' do 
      user = User.create(username: 'test', email: 'test@email.com', password: 'test123')
      group = Group.create(name: 'test', purpose: 'test', user_id: user.id)
      group.meetups.create(meetup_time: '12:00')

      expect(group.meetups.last.meetup_time).to be_truthy
      expect(group.meetups.last.meetup_time.class).to eq(ActiveSupport::TimeWithZone)
    end 

    it 'should have an array of those attended' do
      user = User.create(username: 'test', email: 'test@email.com', password: 'test123')
      group = Group.create(name: 'test', purpose: 'test', user_id: user.id)
      group.meetups.create(meetup_time: '12:00')

      expect(group.meetups.last.attended.class).to eq(Array)
    end

    it 'should have an array of those who did not attend' do
      user = User.create(username: 'test', email: 'test@email.com', password: 'test123')
      group = Group.create(name: 'test', purpose: 'test', user_id: user.id)
      group.meetups.create(meetup_time: '12:00')

      expect(group.meetups.last.no_show.class).to eq(Array)
    end
  end 
end
