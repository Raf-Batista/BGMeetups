class SentMessageSerializer < ActiveModel::Serializer
  attributes :recipient, :subject, :content
end
