class AddUserColumnToGifsTable < ActiveRecord::Migration
  def down

  	drop_table :gifs

  end
end
