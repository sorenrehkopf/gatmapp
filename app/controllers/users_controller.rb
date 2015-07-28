class UsersController < ApplicationController

	def new
    @user = User.new
	end

	def create
	@user = User.create user_params

		  flash[:success] = "You are signed up, you may now log in."
		  redirect_to root_path

	end

	private

	def user_params
	params.require(:user).permit(:user_name,:picture,:email,:password,:password_confirmation)
	end


end
