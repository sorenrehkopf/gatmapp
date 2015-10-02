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
			users.push({user_name: user.user_name,pic: user.picture,id: user.id})
		end
		render :json => users
	end

	def show
		no_picture = Struct.new(:picture,:user_name,:friendships,:inverse_friends)
		@user = current_user || no_picture.new('https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c.jpeg','anonymous',[],[])
		@user_show = User.find (params[:id])
		
		@sorted_posts = @user_show.posts.all.sort_by{|e| e[:created_at]}.reverse
	end

	private

	def user_params
	params.require(:user).permit(:user_name,:email,:password,:password_confirmation)
	end


end
