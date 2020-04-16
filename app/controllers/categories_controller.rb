# frozen_string_literal: true

class CategoriesController < ApplicationController
  def index
    @categories = Category.all

    render json: @categories
  end

  def show
    @category = Category.find(params[:id])

    render json: @category.as_json(methods: %i[artists songs], include: :albums)
  end
end
