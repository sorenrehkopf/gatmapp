class SessionsController < ApplicationController


	# if !@current_user
	# 	redirect_to root_path
	# end

	def index
		@user = current_user
		@users = User.all
		  if params[:search]
		    @users = User.search(params[:search]).order("created_at DESC")
		  else
		    @users = User.all.order('created_at DESC')
		  end
	end

	def feed
		@posts=[]
		@user = current_user
		@users = User.all
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
