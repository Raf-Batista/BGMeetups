class CreateBoardgames < ActiveRecord::Migration[6.0]
  def change
    create_table :boardgames do |t|
      t.string :name
      t.belongs_to :user
      t.text :description
      t.decimal :price, :precision => 8, :scale => 2

      t.timestamps
    end
  end
end
