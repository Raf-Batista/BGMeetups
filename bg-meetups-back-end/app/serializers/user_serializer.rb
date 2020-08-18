class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  include ActionView::Helpers

  attributes :id, :username, :email, :avatar, :sent_messages, :received_messages, :boardgames

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

  def boardgames 
    self.object.boardgames.map do |boardgame|
      {
        name: boardgame.name,
        description: boardgame.description,
        price: number_to_currency(boardgame.price)
      }
    end 
  end 
end
