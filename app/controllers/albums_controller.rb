# frozen_string_literal: true

class AlbumsController < ApplicationController
  def show
    @album = Album.find(params[:id])

    render json: @album.as_json(include: :songs)
  end
end
