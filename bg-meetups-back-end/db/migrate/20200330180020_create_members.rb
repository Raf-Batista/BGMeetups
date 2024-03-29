class CreateMembers < ActiveRecord::Migration[6.0]
  def change
    create_table :members do |t|
      t.belongs_to :user 
      t.belongs_to :group
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
