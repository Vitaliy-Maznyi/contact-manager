class CreateContacts < ActiveRecord::Migration[6.0]
  def change
    create_table :contacts do |t|
      t.references :user, null: false, foreign_key: true
      t.string :first_name, null: false
      t.string :last_name
      t.string :phone_number, null: false
      t.boolean :favourite, default: false

      t.timestamps
    end
  end
end
