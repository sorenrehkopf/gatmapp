class UsersController < ApplicationController

	def new
    @user = User.new
	end

	def create

	if params[:user][:picture]
		uploaded_file = params[:user][:picture].path
	    cloudinary_file = Cloudinary::Uploader.upload(uploaded_file)
	else
		cloudinary_file="string";
	end

	@user = User.create(user_name: params[:user][:user_name],picture: cloudinary_file['public_id'],
		email: params[:user][:email],password: params[:user][:password],
		password_confirmation: params[:user][:password_confirmation]);

		  flash[:success] = "You are signed up, you may now log in."
		  redirect_to root_path

	end

	private

	def user_params
	params.require(:user).permit(:user_name,:email,:password,:password_confirmation)
	end


end
