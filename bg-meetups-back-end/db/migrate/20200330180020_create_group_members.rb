class CreateGroupMembers < ActiveRecord::Migration[6.0]
  def change
    create_table :group_members do |t|
      t.integer :user_id 
      t.integer :group_id 
      t.string :admin 
      t.string :warning, default: 0 
      t.boolean :accepted 
      t.boolean :denied 
      t.boolean :removed 
      t.boolean :kicked, default: false 
      t.boolean :receive_email, default: false  
      
      t.timestamps
    end
  end
end
