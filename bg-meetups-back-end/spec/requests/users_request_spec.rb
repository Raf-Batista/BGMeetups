require 'rails_helper'

RSpec.describe "Users", type: :request do
    describe 'success' do
        it 'returns the correct JSON response' do 
            headers = { "ACCEPT" => "application/json; charset=utf-8" }
            post '/users', params: {user: {email: 'test@email.com', username: 'test', password: 'test123'}}
            json_response = JSON.parse(response.body)

            expect(response.content_type).to eq("application/json; charset=utf-8")
            expect(response).to have_http_status(:created)
            expect(json_response.keys).to match(['user'])
        end 

        it 'is saved to the database' do 
            expect(User.all.size).to eq(0)
            post '/users', params: {user: {email: 'test@email.com', username: 'test', password: 'test123'}}
            expect(User.all.size).to eq(1)
        end 
    end

end
