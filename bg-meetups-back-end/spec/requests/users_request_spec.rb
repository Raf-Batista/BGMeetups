require 'rails_helper'

RSpec.describe "Users", type: :request do
    describe 'correct attributes' do
        it 'can be created' do 
            headers = { "ACCEPT" => "application/json" }
            post '/users', params: {user: {username: 'test@email.com', username: 'test', password: 'test123'}}
            json_response = JSON.parse(response.body)

            expect(response.content_type).to eq("application/json")
            expect(response).to have_http_status(:created)
            expect(json_response.keys).to match('user')
        end 
    end

end
