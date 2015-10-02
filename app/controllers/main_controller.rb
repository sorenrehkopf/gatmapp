class MainController < ApplicationController


	def index
		if @current_user
		redirect_to sessions_path
	end
    @user = User.new
	end

	def new
		@user=User.new
	end

	def create
	  user = User.authenticate(params[:user][:email],
      params[:user][:password])

    if user
      session[:user_id] = user.id
      flash[:success] = 'You are now logged in.'
      redirect_to sessions_path
    else

      flash[:danger] = 'Invalid email or password.'
      redirect_to root_path
    end
	end

	private

	def user_params
	params.require(:user).permit(:email,:name,:password)
	end

  	def destroy
	    session[:user_id] = nil
	    flash[:info] = "You are logged out."
	    redirect_to root_path
	 end


end
