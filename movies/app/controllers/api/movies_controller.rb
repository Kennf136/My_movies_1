class Api::MoviesController < ApplicationController

    def index
    @movies = Movie.all 
    render json: @movies 
    end

    def show
        @movie = Movie.find(params[:id])
        render json:@movie
    end
    
    def destroy 
        @movie= Movie.find(params[:id]).destroy
        render status: :ok
    end
    
    def create 
        @movie= Movie.create!(movie_params)
        render json:@movie
    end

    def update 
        @movie= Movie.find(params[id])
        @movie.update!(movie_params)
        render json:@movie
    end

    private

    def movie_params
      params.require(:movie).permit(:title, :genre, :year, :synopis, :picture)
    end

end
