# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_01_03_104731) do
  create_table "repos", force: :cascade do |t|
    t.string "path", null: false
    t.integer "user_id", null: false
    t.string "public_key"
    t.string "private_key"
  end

  create_table "secrets", force: :cascade do |t|
    t.integer "repo_id", null: false
    t.string "key", null: false
    t.string "value", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "auth_provider", null: false
    t.string "auth_uid", null: false
    t.string "full_name"
    t.string "token"
  end
end
