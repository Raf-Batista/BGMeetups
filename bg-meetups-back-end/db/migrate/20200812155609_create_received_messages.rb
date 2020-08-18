class CreateReceivedMessages < ActiveRecord::Migration[6.0]
  def change
    create_table :received_messages do |t|
      t.integer :user_id
      t.string :from
      t.string :subject
      t.text :content
    end
  end
end
