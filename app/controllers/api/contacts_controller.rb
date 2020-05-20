class Api::ContactsController < Api::BaseController
  before_action :set_current_user
  before_action :set_contact, except: %i[index create]

  def index
    @contacts = ::Contacts::Loader.new(current_user: @current_user, scope: params[:scope]).perform
    render json: @contacts
  end

  def show
    render json: @contact
  end

  def create
    @contact = @current_user.contacts.create!(contact_params)
    render json: @contact
  end

  def update
    @contact.update!(contact_params)
    render json: @contact
  end

  private

  def contact_params
    params.require(:contact).permit(:first_name, :last_name, :phone_number, :favourite)
  end

  def set_current_user
    @current_user ||= User.first # TODO: remove after adding authentication
  end

  def set_contact
    @contact = @current_user.contacts.find(params[:id])
  end
end
