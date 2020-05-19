class Api::ContactsController < Api::BaseController
  before_action :set_current_user

  def index
    @contacts = ::Contacts::Loader.new(current_user: @current_user, scope: params[:scope]).perform
    render json: @contacts
  end

  def show
    @contact = @current_user.contacts.find(params[:id])
    render json: @contact
  end

  private

  def set_current_user
    @current_user ||= User.first # TODO: remove after adding authentication
  end
end
