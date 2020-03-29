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
  end 
end
