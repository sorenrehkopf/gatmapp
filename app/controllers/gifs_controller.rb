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
		@gif=Gif.new(params[:url][:imgSrc])
	end

	def show
		@gif = Gif.create(url: params[:id])
		redirect_to sessions_path
	end


end
