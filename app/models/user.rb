class User < ActiveRecord::Base

	has_secure_password

	validates :password,
	presence: true,
	confirmation: true

	validates :password_confirmation,
	presence: true

	validates :email,
 	presence: true,
 	uniqueness: {case_sensitive: false},
 	format: {with: /@/}

 	validates :user_name,
 	uniqueness: {case_sensitive: false}

 	has_many :gifs
 	has_many :posts

 	has_many :friendships
 	has_many :friends, :through => :friendships

 	has_many :inverse_friendships, :class_name => "Friendship", :foreign_key => "friend_id"
 	has_many :inverse_friends, :through => :inverse_friendships, :source => :user

 	def self.authenticate email, password
		User.find_by_email(email).try(:authenticate, password)
	end

	def self.search(search)
	if search
	  where("user_name LIKE ?", "%#{search}%") 
	else
		scoped
	end
end
	
end
