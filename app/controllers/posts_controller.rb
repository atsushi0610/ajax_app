class PostsController < ApplicationController

  def index
    @posts = Post.order(id: "DESC")
  end

  # def new
  # end

  def create
    post = Post.create(content: params[:content]) #Postモデルで生成されたメモの内容を変数に代入
    render json:{ post: post } #生成された変数postをpostキーとセットにして渡す
  end
end
