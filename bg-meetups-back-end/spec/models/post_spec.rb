require 'rails_helper'

RSpec.describe Post, type: :model do
  describe 'associations' do 
    it {should belong_to(:user)}
    it {should belong_to(:group)}
  end 

  before(:example) do 
    user = User.create(name: 'test', email: 'test@email.com', password: 'test123')
    user.groups.create(name: 'test', purpose: 'test', user: user).save
    
    @valid_post = user.posts.create(title: 'test title', content: 'test content', group: user.groups.last)
    @invalid_post = Post.new(title: '', content: '', user_id: user.id, group_id: user.groups.last.id)
  end 

  describe 'valid attributes' do 
    it 'should have a title' do 
    
    end 

    it 'should have content' do 

    end 
  end 

  describe 'invalid attributes' do 
    it 'can not be created without a title' do 

    end 

    it 'can not be created without content' do 

    end 
  end 
end
