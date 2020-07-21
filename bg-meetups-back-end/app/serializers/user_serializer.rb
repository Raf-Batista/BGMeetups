class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :username, :email, :avatar

  # def avatar
  #   if object.featured_image.attached?
  #     {
  #       url: rails_blob_url(object.avatar)
  #     }
  #   end
  # end
end
