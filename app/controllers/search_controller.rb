# frozen_string_literal: true

class SearchController < ApplicationController
  def index
    @songs = Song.where(Song.arel_table[:title].matches("%#{params[:query]}%"))
    @albums = Album.where(Album.arel_table[:title].matches("%#{params[:query]}%"))
    @artist = Artist.where(Artist.arel_table[:name].matches("%#{params[:query]}%"))

    render json: { songs: @songs, albums: @albums, artist: @artist }
  end
end
