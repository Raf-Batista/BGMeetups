require 'rails_helper'

RSpec.describe "Users", type: :request do
    describe 'successful creation of a user' do
        it 'returns the correct JSON response' do 
            headers = { "ACCEPT" => "application/json; charset=utf-8" }
            post '/users', params: {email: 'test@email.com', username: 'test', password: 'test123'}
            json_response = JSON.parse(response.body)

            expect(response.content_type).to eq("application/json; charset=utf-8")
            expect(response).to have_http_status(:created)
            expect(json_response.keys).to match(['email', 'username', 'avatar'])
        end 

        it 'is saved to the database' do 
            expect(User.all.size).to eq(0)
            post '/users', params: {email: 'test@email.com', username: 'test', password: 'test123'}
            expect(User.all.size).to eq(1)
        end 

        it 'creates and attaches an identicon as the user avatar' do 
            expect(ActiveStorage::Attachment.all.size).to eq(0)
            post '/users', params: {email: 'test@email.com', username: 'test', password: 'test123'}
            expect(ActiveStorage::Attachment.all.size).to eq(1)
        end 
    end

    describe 'unsuccessful creation of user' do 
        it 'is not saved to the database with blank attributes' do 
            expect(User.all.size).to eq(0)
            post '/users', params: {email: '', username: '', password: ''}
            expect(User.all.size).to eq(0)
        end 

        it 'is not saved to the database without an email' do 
            expect(User.all.size).to eq(0)
            post '/users', params: {email: '', username: 'test', password: 'test123'}
            expect(User.all.size).to eq(0)
        end 

        it 'is not saved to the database without a username' do 
            expect(User.all.size).to eq(0)
            post '/users', params: {email: 'test@email.com', username: '', password: 'test123'}
            expect(User.all.size).to eq(0)
        end 

        it 'is not saved to the database without a password' do 
            expect(User.all.size).to eq(0)
            post '/users', params: {email: 'test@email.com', username: 'test', password: ''}
            expect(User.all.size).to eq(0)
        end 

        it 'returns errors in JSON response' do 
            headers = { "ACCEPT" => "application/json; charset=utf-8" }
            post '/users', params: {email: '', username: '', password: ''}
            json_response = JSON.parse(response.body)

            expect(response.content_type).to eq("application/json; charset=utf-8")
            expect(response).to have_http_status(:not_acceptable)
            expect(json_response.keys).to match(['errors'])
        end
    end 

    describe 'can successfully update' do 
        it 'returns correct JSON response' do 
            headers = { "ACCEPT" => "application/json; charset=utf-8" }
            post '/users', params: {email: 'test@email.com', username: 'test', password: 'test123'}
            patch "/users/#{User.last.id}", params: {id: User.last.id, email: 'I_AM_CHANGED@email.com', username: 'test'}
            json_response = JSON.parse(response.body)

            expect(response.content_type).to eq("application/json; charset=utf-8")
            expect(response).to have_http_status(:ok)
            expect(json_response["email"]).to eq('I_AM_CHANGED@email.com')
        end 
    end     
end
