class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :username, :email, :avatar, :messages

  def avatar
    if object.avatar.attached?
      # URI.join(ActionController::Base.asset_host, rails_blob_path(object.avatar))
      # url_for(object.avatar)
      rails_blob_path(object.avatar)
      # attribute :verification_url do
      #   if object.verification_file.attachment
      #     URI.join(ActionController::Base.asset_host, rails_blob_path(object.verification_file))
      #   end
      # end
    end
  end
end
