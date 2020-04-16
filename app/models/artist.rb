# frozen_string_literal: true

class Artist < ApplicationRecord
  # Uploders
  mount_uploader :photo, ImageUploader
  # Associations
  has_many :albums

  # Validations
  validates :name, presence: true
end
