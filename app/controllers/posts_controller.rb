class PostsController < ApplicationController

	def profile
		@user = current_user
		@users = User.all
	end

	def new
		@post = Post.new
	end

	def create
		@user = current_user
		@post = @user.posts.create(url: params[:url])
		respond_to do |format|
   		format.json { head :ok }
 end
	end

	def show
		# @post = post.create(url: params[:id])
		# redirect_to sessions_path
	end

	def destroy
		post = Post.find(params[:id])
		result=post.delete
		render :json => {result:result}
	end
end
