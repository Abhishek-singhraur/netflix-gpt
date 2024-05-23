import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addtrailerVedio } from '../utils/movieSlice';
import { useEffect } from 'react';

const useMovieTrailer = (movieId) => {
       const  dispatch = useDispatch();
    const getMovieVedio = async() => {
        const url = "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US";
       const data = await fetch(url, API_OPTIONS);
       const json = await data.json();
      
       const filterData = json.results.filter(vedio => vedio.type ===  "Trailer");
    
     
       const trailer = filterData.length ? filterData[0] : json.results[0];
      
       dispatch(addtrailerVedio(trailer));
      };

   
      useEffect(() => {
  
          getMovieVedio();
  
      },[]);

}

export default useMovieTrailer;