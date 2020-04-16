# frozen_string_literal: true

class Category < ApplicationRecord
  # Uploders
  mount_uploader :image, ImageUploader
  # Associations
  has_many :albums

  # Validations
  validates :name, presence: true

  def artists
    Artist.joins(:albums).where(albums: { id: albums.ids }).distinct
  end

  def songs
    Song.joins(:album).where(songs: { id: albums.ids }).distinct
  end
end
