require 'rails_helper'

RSpec.describe Boardgame, type: :model do
  it { should belong_to(:user) }
end
