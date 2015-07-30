class SessionsController < ApplicationController


	# if !@current_user
	# 	redirect_to root_path
	# end

	def index
		@user = current_user
		@users = User.all
	end

	def feed
		@user = current_user
		@users = User.all
	end

	def destroy
	session[:user_id] = nil
	flash[:info] = "You are logged out."
	redirect_to root_path
	end

end
