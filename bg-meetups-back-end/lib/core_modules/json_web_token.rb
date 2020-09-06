module CoreModules::JsonWebToken
    require 'jwt'
    JWT_SECRET = Rails.application.secrets.secret_key_base || ENV["SECRET_KEY_BASE"]
  
    def self.encode(payload, exp = 24.hours.from_now)
      payload[:exp] = exp.to_i
      JWT.encode(payload, JWT_SECRET)
    end
  
    def self.decode(token)
      begin
      body = JWT.decode(token, JWT_SECRET)
      return HashWithIndifferentAccess.new body[0] if body
      rescue JWT::ExpiredSignature, JWT::VerificationError => e
        return false
      rescue JWT::DecodeError, JWT::VerificationError => e
        return false
      end

      return false
    end
  end