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

ActiveRecord::Schema.define(version: 2020_08_26_003143) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "boardgames", force: :cascade do |t|
    t.string "name"
    t.bigint "user_id"
    t.text "description"
    t.decimal "price", precision: 8, scale: 2
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_boardgames_on_user_id"
  end

  create_table "groups", force: :cascade do |t|
    t.bigint "user_id"
    t.string "status", default: "open"
    t.string "purpose"
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_groups_on_user_id"
  end

  create_table "invitations", force: :cascade do |t|
    t.bigint "group_id"
    t.string "from"
    t.string "recipient"
    t.string "invitation_link"
    t.boolean "active", default: true
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["group_id"], name: "index_invitations_on_group_id"
  end

  create_table "meetups", force: :cascade do |t|
    t.bigint "group_id"
    t.datetime "meetup_time"
    t.integer "attended", default: [], array: true
    t.integer "no_show", default: [], array: true
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["group_id"], name: "index_meetups_on_group_id"
  end

  create_table "memberships", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "group_id"
    t.string "admin"
    t.string "warning", default: "0"
    t.boolean "accepted"
    t.boolean "denied"
    t.boolean "removed"
    t.boolean "kicked", default: false
    t.boolean "receive_email", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["group_id"], name: "index_memberships_on_group_id"
    t.index ["user_id"], name: "index_memberships_on_user_id"
  end

  create_table "posts", force: :cascade do |t|
    t.integer "user_id"
    t.integer "group_id"
    t.string "title"
    t.text "content"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "received_messages", force: :cascade do |t|
    t.bigint "user_id"
    t.string "from"
    t.string "subject"
    t.text "content"
    t.index ["user_id"], name: "index_received_messages_on_user_id"
  end

  create_table "sent_messages", force: :cascade do |t|
    t.bigint "user_id"
    t.string "recipient"
    t.string "subject"
    t.text "content"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_sent_messages_on_user_id"
  end

  create_table "supers", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.integer "whitebox", default: [], array: true
    t.integer "blackbox", default: [], array: true
    t.string "default_blackbox_message", default: "User has denied the invitation"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.integer "whitebox", default: [], array: true
    t.integer "blackbox", default: [], array: true
    t.boolean "vip", default: false
    t.string "default_blackbox_message", default: "User has denied the invitation"
    t.integer "approved", default: 1
    t.integer "appealed", default: 1
    t.integer "access", default: 2
    t.integer "reputation", default: 0
    t.jsonb "board_games", default: [], array: true
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
