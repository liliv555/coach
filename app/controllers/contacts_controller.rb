class ContactsController < ApplicationController

  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    if @contact.deliver
      flash[:success] = "All good!"
      format.html { redirect_to root_path }
    else
      flash.now[:error] = 'Could not send message'
      render :new
    end
  end
end
