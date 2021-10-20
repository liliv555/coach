class ContactsController < ApplicationController

  def new
    @contact = Contact.new
    @sent = false
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    if @contact.deliver
      @sent = true
      redirect_to root_path
    else
      flash[:error] = 'Could not send message'
      render :new
    end
  end
end
