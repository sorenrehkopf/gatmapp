class UsersController < ApplicationController

	def new
    @user = User.new
	end

	def create
	@user = User.create user_params
		if @user.persisted?
		  flash[:success] = "You are signed up, you may now log in."
		  redirect_to root_path
		else
		  flash[:danger] = @user.errors.full_messages.uniq.to_sentence
		  render :new
		end
	end

	private

	def user_params
	params.require(:user).permit(:email,:name,:password)
	end


end
