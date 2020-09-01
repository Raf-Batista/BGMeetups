class RenameMembersTableToMemberships < ActiveRecord::Migration[6.0]
  def change
    rename_table :members, :memberships
  end
end
