class CreateGroups < ActiveRecord::Migration[6.0]
  def change
    create_table :groups do |t|
     # t.references :user, foreign_key: true
      t.belongs_to :user
      t.string :status, default: "open"
      t.string :purpose 
      t.string :name

      t.timestamps
    end
  end
end
