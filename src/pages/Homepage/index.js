import React, {useEffect, useState} from 'react';
import api from '../../services/api';
import MovieCard from '../../components/MovieCard'

import {MainContent, MovieList, PaginationContainer, PrevPagination, NextPagination} from './style';

function Homepage(){
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(()=> {
    api.get('discover/movie').then(result => {
      console.log(result.data.results);
      setMovies(result.data.results);
      setPage(result.data.page);
    })
  }, []);

  async function handleChangePage(page){

    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });

    const response = await api.get('discover/movie', {
      params: {
        page
      }
    });

    setMovies(response.data.results);
    setPage(response.data.page);

  }

  return (
    <>
      <MainContent>
        <MovieList>
          {movies.map(movie=>(
            <MovieCard movie={movie} />
          ))}
        </MovieList>
        <PaginationContainer page={page}>
          <PrevPagination onClick={()=>handleChangePage(page-1)} page={page-1}>Page {page-1}</PrevPagination>
          <NextPagination onClick={()=>handleChangePage(page+1)} page={page+1}>Page {page+1} </NextPagination>
        </PaginationContainer>
      </MainContent>
    </>
  )
};

export default Homepage