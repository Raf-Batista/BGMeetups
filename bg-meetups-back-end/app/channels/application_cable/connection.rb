module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user
 
    def connect
      self.current_user = find_verified_user
    end
 
    private
      def find_verified_user
        token = cookies.signed[:jwt]
        decoded_token = CoreModules::JsonWebToken.decode(token)
        if decoded_token
          verified_user = User.find_by(id: decoded_token["user_id"])
        end

        if verified_user then return verified_user else return reject_unauthorized_connection end
      end
  end
end
