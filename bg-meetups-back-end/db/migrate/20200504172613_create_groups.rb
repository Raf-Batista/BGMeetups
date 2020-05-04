class CreateGroups < ActiveRecord::Migration[6.0]
  def change
    create_table :groups do |t|
      t.integer :user_id 
      t.string :status, default: "open"
      t.string :purpose 
      t.string :name

      t.timestamps
    end
  end
end
