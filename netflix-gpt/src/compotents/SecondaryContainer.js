import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

 const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log(movies);
  return (
    <div className='bg-black'>
      <div className='-mt-40 pl-5 relative '>
        <MovieList  title = {"Now Playing" } movies = {movies.nowPlayingMovies}/>
        <MovieList  title = {"Trending " } movies = {movies.topRatedMovies}/>
        <MovieList  title = {"Popular" } movies = {movies.popularMovies}/>
        <MovieList  title = {"Up Comming Movies" } movies = {movies.upComingMovies}/>
        <MovieList  title = {"Romantic" } movies = {movies.nowPlayingMovies}/>
        
      </div>
      
      
    </div>
  );
};

export default SecondaryContainer;
