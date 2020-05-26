require 'rails_helper'

RSpec.describe Message, type: :model do
  describe 'associations' do 
    it { should belong_to(:user) }
  end 

  describe 'attributes' do 
    it { should validate_presence_of(:recipient) }
    it { should validate_presence_of(:subject) }
    it { should validate_presence_of(:content) }
  end 
end
