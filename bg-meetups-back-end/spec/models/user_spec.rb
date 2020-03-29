require 'rails_helper'

RSpec.describe User, type: :model do

  describe 'validations' do
   it { should validate_presence_of(:name) }
   it { should validate_presence_of(:email) }
   it { should validate_presence_of(:interest) }
   it { should validate_presence_of(:password) }
  end  

  describe 'it is not created with blank or invalid attributes' do 
    it 'can not be created with blank attributes that are required' 

    it 'can not be created if a user exists'

    it 'can not be created with an invalid email' 


  end 
end
