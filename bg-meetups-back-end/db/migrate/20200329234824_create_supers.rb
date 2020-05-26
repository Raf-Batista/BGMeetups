class CreateSupers < ActiveRecord::Migration[6.0]
  def change
    create_table :supers do |t|
      t.string :name
      t.string :email
      t.string :password_digest
    # t.string :interest # creat interest table, user on front end chooses interest
      t.integer :whitebox, array: true, default: []
      t.integer :blackbox, array: true, default: []
      t.string :default_blackbox_message, default: 'User has denied the invitation'
      t.timestamps
    end
  end
end
