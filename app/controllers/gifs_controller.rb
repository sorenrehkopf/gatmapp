class GifsController < ApplicationController

	before_action :current_user

	def collection
		@user = current_user
		@users = User.all
	end

	def new
		@gif = Gif.new
	end

	def create
		@user = current_user
		@gif = @user.gifs.create(url: params[:url])
		respond_to do |format|
   		format.json { head :ok }
 end
	end

	def show
		@gif = Gif.create(url: params[:id])
		redirect_to sessions_path
	end


end
