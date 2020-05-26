require 'rails_helper'

RSpec.describe Member, type: :model do
  describe 'associations' do 
    it { should belong_to(:user) }
    it { should belong_to(:group) }
  end 

  describe 'validations' do 
    it 'should have a default value of false' do 
      user = User.create(name: 'test', email: 'test@email.com', password: 'test123' )
      user.groups.create()
    end 
  end 
end
