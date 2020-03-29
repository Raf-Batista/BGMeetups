class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email 
      t.string :interest 
      t.integer :whitebox, array: true, default: []
      t.integer :blackbox, array: true, default: []
      t.boolean :vip, default: false
      t.string :default_blackbox_message, default: 'User has denied the invitation'
      t.string :password
      t.integer :approved, default: 1 
      t.integer :appealed, default: 1
      t.integer :access, default: 2
      t.string :password_digest
      t.timestamps
    end
  end
end
