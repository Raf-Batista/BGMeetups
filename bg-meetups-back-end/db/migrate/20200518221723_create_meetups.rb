class CreateMeetups < ActiveRecord::Migration[6.0]
  def change
    create_table :meetups do |t|
      t.integer :group_id
      t.datetime :meetup_time
      t.integer :attended, array: true, default: []
      t.integer :no_show, array: true, default: []

      t.timestamps
    end
  end
end
