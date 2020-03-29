require 'rails_helper'

RSpec.describe User, type: :model do
  context 'with correct attributes' do
    before(:context) do 
      @user = User.create(name: 'test', email: 'test@email.com', interest: 'test', whitebox: [], blackbox: [], password: 'test123')
    end 
    describe 'it can be created with correct attributes' do
      it 'can be created successfully' do 
        expect(@user.errors.any?).to be_falsey
      end 
      it 'is created with the correct default values' do
        expect(@user.whitebox.class).to eq(Array)
        expect(@user.blackbox.class).to eq(Array)
        expect(@user.vip).to be_falsey
        expect(@user.default_blackbox_message).to eq('User has denied the invitation')
        expect(@user.approved).to eq(1)
        expect(@user.appealed).to eq(1)
        expect(@user.access).to eq(2)
      end 
    end 
  end   
end
