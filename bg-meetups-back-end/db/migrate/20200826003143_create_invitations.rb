class CreateInvitations < ActiveRecord::Migration[6.0]
  def change
    create_table :invitations do |t|
      t.belongs_to :group
      t.string :from
      t.string :recipient
      t.string :invitation_link
      t.boolean :active, default: true
     
      t.timestamps
    end
  end
end
