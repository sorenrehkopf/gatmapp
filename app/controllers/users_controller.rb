class UsersController < ApplicationController

	# if !@current_user
	#   	redirect_to root_path
 #  	end

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
		if @user.persisted?
		  flash[:success] = "You are signed up! Login above."
		  redirect_to root_path
		else
	      flash[:danger] = @user.errors.full_messages.uniq.to_sentence
	      redirect_to root_path	
	    end

	end

	def show
		@user = current_user
		@user_show = User.find (params[:id])
		@users = User.all
	end

	private

	def user_params
	params.require(:user).permit(:user_name,:email,:password,:password_confirmation)
	end


end
