# frozen_string_literal: true

class Album < ApplicationRecord
  # Uploders
  mount_uploader :cover, ImageUploader

  # Associations
  belongs_to :category
  belongs_to :artist
  has_many :songs

  # Validations
  validates :title, :date, presence: true
end
