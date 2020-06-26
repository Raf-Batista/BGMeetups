require 'rails_helper'

RSpec.describe "Sessions", type: :request do
    describe 'successful login' do 
        it 'returns the correct JSON response' do 
            User.create(username: 'test', email: 'test@email.com', password: 'test123')
            headers = { "ACCEPT" => "application/json; charset=utf-8" }
            post '/sessions', params: {email: 'test@email.com', password: 'test123'}
            json_response = JSON.parse(response.body)

            expect(response.content_type).to eq("application/json; charset=utf-8")
            expect(response).to have_http_status(:created)
            expect(json_response.keys).to match(['user'])
            expect(json_response['user']['username']).to be_truthy
        end 
        
    end 
end
