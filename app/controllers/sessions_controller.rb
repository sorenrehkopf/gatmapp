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
		@user = current_user
		@users = User.all
		@posts = Post.order("created_at DESC").all
	end

	def destroy
	session[:user_id] = nil
	flash[:info] = "You are logged out."
	redirect_to root_path
	end

end
