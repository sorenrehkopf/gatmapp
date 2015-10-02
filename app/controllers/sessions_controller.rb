class SessionsController < ApplicationController


	@users = User.search("user")

	def index
		no_picture = Struct.new(:picture,:user_name,:friendships,:inverse_friends)
		@user = current_user || no_picture.new('https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c.jpeg','anonymous',[],[])
		@users = User.all
	end

	def feed
		if !@current_user
			redirect_to root_path
		else
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
	end

	def destroy
	session[:user_id] = nil
	flash[:info] = "You are logged out."
	redirect_to root_path
	end

end
