class UsersController < ApplicationController

	# if !@current_user
	#   	redirect_to root_path
 #  	end

 	def index
	  @users = User.all
	end

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

	def search
		users = []
		User.search(params[:user_name]).each do |user|
			users.push({user_name: user.user_name,pic: user.picture})
		end
		render :json => users
	end

	def show
		@user = current_user
		@user_show = User.find (params[:id])
		@users = User.search(params[:user_name])
		@sorted_posts = @user_show.posts.all.sort_by{|e| e[:created_at]}.reverse
	end

	private

	def user_params
	params.require(:user).permit(:user_name,:email,:password,:password_confirmation)
	end


end
