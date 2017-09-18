# @variable_name is an instance variable

class BookController < ApplicationController
  # search the books table and store each row it finds in the @books instance object
  def list
    @books = Book.all
  end

  # display further detail on a single book
  def show
    @book = Book.find(params[:id])
  end

  # create a new object
  def new
    @book = Book.new
    @subjects = Subject.all
  end

  # create a record in the database
  def create
    @book = Book.new(book_params)
    if @book.save
      redirect_to :action => 'list'
    else
      @subjects = Subject.all
      render :action => 'new'
    end
  end
  def book_params
    params.require(:books).permit(:title, :price, :subject_id, :description)
  end

  # retrieve a single object and the subjects array
  def edit
    @book = Book.find(params[:id])
    @subjects = Subject.all
  end

  # called after the edit method
  def update
    @book = Book.find(params[:id])
    if @book.update_attributes(book_param)
      redirect_to :action => 'show', :id => @book
    else
      @subjects = Subject.all
      render :action => 'edit'
    end
  end
  def book_param
    params.require(:book).permit(:title, :price, :subject_id, :description)
  end

  def delete
  end
end
