class Contact < ApplicationRecord
  SCOPES = {
    all: 'all',
    favourites: 'favourites'
  }

  belongs_to :user

  validates_presence_of :first_name, :phone_number

  scope :favourites, -> { where(favourite: true) }
end
