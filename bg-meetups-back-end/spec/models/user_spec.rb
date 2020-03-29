require 'rails_helper'

RSpec.describe User, type: :model do
  context 'with correct attributes' do
    describe 'it can be created with correct attributes' do
      it 'can be created successfully' do 
        user = User.new(name: 'test', email: 'test@email.com', interest: 'test', whitebox: [], blackbox: [], default_blackbox_message: 'this is a test', password: 'test123')
        expect(user.save).to be_truthy
      end 
    end 
  end   
end
