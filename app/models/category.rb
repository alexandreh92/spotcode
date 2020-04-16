# frozen_string_literal: true

class Category < ApplicationRecord
  # Uploders
  mount_uploader :image, ImageUploader
  # Associations
  has_many :albums

  # Validations
  validates :name, presence: true
end
