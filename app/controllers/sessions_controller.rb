class SessionsController < ApplicationController


	# if !@current_user
	# 	redirect_to root_path
	# end

	@users = User.search("user")

	def index
		@user = current_user
		@users = User.all
	end

	def feed
		@posts=[]
		@user = current_user
		@users = User.search("user")
		@user.friends.each do |friend|
					friend.posts.each do |post|
						@posts	<< post
					end
				end
		@sorted_posts = @posts.sort_by{|e| e[:created_at]}.reverse
	end

	def destroy
	session[:user_id] = nil
	flash[:info] = "You are logged out."
	redirect_to root_path
	end

end
