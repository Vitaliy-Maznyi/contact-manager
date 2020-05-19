module Contacts
  class Loader
    def initialize(current_user:, scope:)
      @current_user = current_user
      @scope = scope || Contact::SCOPES[:all]
    end

    def perform
      contacts = @current_user.contacts
      contacts = contacts.favourites if @scope === Contact::SCOPES[:favourites]
      contacts
    end
  end
end
