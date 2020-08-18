class RenameMessagesTableToSentMessages < ActiveRecord::Migration[6.0]
  def change
    rename_table :messages, :sent_messages
  end
end
