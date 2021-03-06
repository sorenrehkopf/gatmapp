class GifsController < ApplicationController

	# if !@current_user
	#   	redirect_to root_path
 #  	end

	def collection
		if !@current_user
			redirect_to root_path
		else
		@user = current_user
		@users = User.all
		end
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
		# @gif = Gif.create(url: params[:id])
		# redirect_to sessions_path
	end

	def destroy
		gif = Gif.find(params[:id])
		result=gif.delete
		render :json => {result:result}
	end


end
