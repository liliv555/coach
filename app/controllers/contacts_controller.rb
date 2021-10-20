class ContactsController < ApplicationController

  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    if @contact.deliver
      redirect_to root_path, notice: "Message sent!"
      # flash.now[:success] = 'Message sent!'
      # redirect_to root_path
    else
      flash.now[:error] = 'Could not send message'
      render :new
    end
  end
end
