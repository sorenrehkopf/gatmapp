class GifsController < ApplicationController

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
