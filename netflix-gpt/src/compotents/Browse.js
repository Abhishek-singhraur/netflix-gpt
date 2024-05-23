import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from"./MainContainer";
import SecondaryContainer  from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import GptSearch from './GptSearch';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpComingMovies from '../hooks/useUpComingMovies';


const Browse = () => {

  // api hook coll
  useNowPlayingMovies();  
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  return (
    <div>
      <Header/>
      <GptSearch/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;