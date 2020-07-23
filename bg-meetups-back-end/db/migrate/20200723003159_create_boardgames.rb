class CreateBoardgames < ActiveRecord::Migration[6.0]
  def change
    create_table :boardgames do |t|
      t.string :name
      t.integer :user_id
      t.text :description
      t.decimal :price

      t.timestamps
    end
  end
end
