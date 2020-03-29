# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_03_29_234824) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "supers", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "interest"
    t.integer "whitebox", default: [], array: true
    t.integer "blackbox", default: [], array: true
    t.boolean "vip", default: false
    t.string "default_blackbox_message", default: "User has denied the invitation"
    t.string "password"
    t.integer "approved", default: 1
    t.integer "appealed", default: 1
    t.integer "access", default: 2
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
