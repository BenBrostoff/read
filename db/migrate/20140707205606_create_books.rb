class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :title
      t.text :sentence_string
      t.text :sentences, array: true

      t.timestamps
    end
  end
end
