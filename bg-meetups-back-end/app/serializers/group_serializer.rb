class GroupSerializer < ActiveModel::Serializer
  attributes :id, :name, :purpose, :memberships, :owner

  def memberships 
    object.memberships.map do |membership|
      user = User.find_by(id: membership.user_id)
      {username: user.username}
    end 
  end 
  
end
