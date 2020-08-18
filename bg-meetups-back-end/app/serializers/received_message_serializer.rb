class ReceivedMessageSerializer < ActiveModel::Serializer
  attributes :from, :subject, :content
end
