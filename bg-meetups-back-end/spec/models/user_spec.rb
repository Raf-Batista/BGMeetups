require 'rails_helper'

RSpec.describe User, type: :model do

  describe 'validations' do
   it { should validate_presence_of(:name) }
   it { should validate_presence_of(:interest) }
   it { should validate_presence_of(:password) }
  end  

  describe 'default attributes' do 
    before(:example) do 
      @user = User.create(name: 'test', email: 'test@email.com', interest: 'test', password: 'test')
    end 
    it 'has a default value for whitebox' do 
      expect(@user.whitebox.class).to eq(Array)
    end 
    it 'has a default value for blackbox' do 
      expect(@user.whitebox.class).to eq(Array)
    end 

    it 'has a default value of false for vip' do 
      expect(@user.vip).to be_falsey
    end 

    it 'has a default blackbox message' do 
      expect(@user.default_blackbox_message).to eq('User has denied the invitation')
    end 

    it 'has a default value of 1 for approved' do 
      expect(@user.approved).to eq(1)
    end 

    it 'has a default value of 1 for appealed' do 
      expect(@user.appealed).to eq(1)
    end 

    it 'has a default value of 2 for access' do 
      expect(@user.approved).to eq(1)
    end 
  end 

  describe 'it is not created with blank or invalid attributes' do 
    it 'can not be created with a blank name' do
      user = User.create(name: '', email: 'test@email.com', interest: 'test', password: 'test')
      expect(user.save).to be_falsey
    end

    it 'can not be created with a blank email' do
      user = User.create(name: 'test', email: '', interest: 'test', password: 'test')
      expect(user.save).to be_falsey
    end

    it 'can not be created with a blank interest' # Might make interest its own table, keep pending for now

    it 'can not be created if a user exists' do 
      User.create(name: 'test', email: 'test@email.com', interest: 'test', password: 'test')
      user = User.create(name: 'test', email: 'test@email.com', interest: 'test', password: 'test')
      expect(user.save).to be_falsey
    end 

    it 'can not be created with an invalid email' do 
      user = User.new(name: 'test', email: 'invalid_email', interest: 'test', password: 'test')
      expect(user.save).to be_falsey
    end 

    describe 'it has a secure password' do 
      it 'does not display the password' do 
        User.create(name: 'test', email: 'test@email.com', interest: 'test', password: 'test')
        expect(User.last.password).to_not eq('test')
      end 
    end 
  end 
end
