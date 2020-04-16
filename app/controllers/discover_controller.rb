# frozen_string_literal: true

class DiscoverController < ApplicationController
  def index
    @recent_heard = load_recent_heard
    @recomendations = load_recomendations

    render json: { recent_albums: @recent_heard.as_json(include: :artist),
                   recommend_albums: @recomendations.as_json(include: :artist) }
  end

  private

  def load_recent_heard
    @recent_albums = current_user.recently_heards.order(created_at: :desc).limit(4).map(&:album).uniq
  end

  def load_recomendations
    heard_categories = @recent_albums.map(&:category)
    if heard_categories.present?
      Album.joins(:category, :songs).where(category: heard_categories)
           .order(Song.arel_table[:played_count]).limit(12).uniq
    else
      Album.all.sample(12)
    end
  end
end
