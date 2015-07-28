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

 	validates :name,
 	uniqueness: {case_sensitive: false}

 	def self.authenticate email, password
		User.find_by_email(email).try(:authenticate, password)
	end
	
end
