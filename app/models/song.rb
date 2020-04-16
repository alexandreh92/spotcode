# frozen_string_literal: true

class Song < ApplicationRecord
  # Uploders
  mount_uploader :file, FileUploader

  # Associations
  belongs_to :album

  # Validations
  validates :title, presence: true
end
