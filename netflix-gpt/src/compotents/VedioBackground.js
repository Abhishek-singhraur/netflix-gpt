
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTailer';


 const VedioBackground = ({movieId}) => {

  const trailerVedio = useSelector((store) => store.movies?.trailerVedio)

 // fetch the trailer vedio from api we coll the function 
  useMovieTrailer(movieId);

   return (
    <div className='w-screen '>
        <iframe  className='w-screen aspect-video'
            
           src={"https://www.youtube.com/embed/"+trailerVedio?.key + "?&autoplay=1&mute=1"} 
           title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"allowFullScreen >

        </iframe>
    </div>
  )
};
export default VedioBackground;
