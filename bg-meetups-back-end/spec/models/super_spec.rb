require 'rails_helper'

RSpec.describe Super, type: :model do
  describe 'validations' do 
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:password) }
  end 

  describe 'invalid attributes' do 
    it 'should not be created with invalid email' do 
      super_user = Super.new(name: 'test', email: 'invalid_valid', password: 'test') 
      expect(super_user.save).to be_falsey
    end 

    describe 'default attributes' do 
      before(:example) do 
        @super_user = Super.create(name: 'test', email: 'test@email.com', password: 'test')
      end 
      it 'has a default value for whitebox' do 
        expect(@super_user.whitebox.class).to eq(Array)
      end 
      it 'has a default value for blackbox' do 
        expect(@super_user.whitebox.class).to eq(Array)
      end 
  
      it 'has a default blackbox message' do 
        expect(@super_user.default_blackbox_message).to eq('User has denied the invitation')
      end 
    end 
  end 
end
