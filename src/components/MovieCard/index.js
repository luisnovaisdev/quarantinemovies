import React from 'react';
import {
  MovieCardContainer,
  MovieCardImageContainer,
  MovieCardScore,
  MovieCardImage,
  MovieCardTitle } from './style'

function MovieCard({movie}){
  
  return(
    <MovieCardContainer>
      <MovieCardImageContainer>
        <MovieCardScore> <span>{movie.vote_average}</span></MovieCardScore>
        <MovieCardImage src={"https://image.tmdb.org/t/p/w500"+movie.poster_path} alt=""/>
      </MovieCardImageContainer>
      <MovieCardTitle>
        {movie.title}
      </MovieCardTitle>
    </MovieCardContainer>
  )
}

export default MovieCard;