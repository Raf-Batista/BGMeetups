class CreateMessages < ActiveRecord::Migration[6.0]
  def change
    create_table :messages do |t|
      t.belongs_to :user
      t.string :recipient
      t.string :subject
      t.text :content

      t.timestamps
    end
  end
end
