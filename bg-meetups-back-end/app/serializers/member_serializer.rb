class MemberSerializer < ActiveModel::Serializer
  attributes :id, :member 

  def member 
    user = User.find_by(id: object.user_id)
    {username: user.name}
  end 
end
