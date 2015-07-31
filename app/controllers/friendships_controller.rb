class FriendshipsController < ApplicationController

	def create
		if !current_user.friendships.find_by_friend_id(params[:friend_id])
			@friendship = current_user.friendships.build(:friend_id => params[:friend_id])
			if @friendship.save
				redirect_to sessions_path
			else
				redirect_to sessions_path
			end
		else
			redirect_to sessions_path
		end
	end

	def destroy

		@friendship = current_user.friendships.find(params[:id])
		@friendship.destroy
		redirect_to sessions_path

	end

end
