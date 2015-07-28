class AddColumnPicturetoTableUsers < ActiveRecord::Migration
  def change
  	add_column :users, :picture, :string
  	rename_column :users, :name, :user_name
 	end
end
