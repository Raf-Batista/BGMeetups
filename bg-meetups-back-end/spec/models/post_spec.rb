require 'rails_helper'

RSpec.describe Post, type: :model do
  describe 'associations' do 
    it {should belong_to(:user)}
    it {should belong_to(:group)}
  end 

  before(:example) do 
    @user = User.create(username: 'test', email: 'test@email.com', password: 'test123')
    @user.groups.create(name: 'test', purpose: 'test', user: @user).save
  end 
 

  describe 'can not be created with invalid attributes' do 
    it 'can not be created without a title or content' do 
      expect(@user.posts.create(title: '', content: 'test').save).to be_falsey
      expect(@user.posts.create(title: 'test', content: '').save).to be_falsey
    end 
  end 
end
