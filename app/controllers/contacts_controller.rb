class ContactsController < ApplicationController

  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    if @contact.deliver
      flash[:notice] = 'Message sent!'
      redirect_to root_path
    else
      flash[:error] = 'Could not send message'
      render :new
    end
  end
end
