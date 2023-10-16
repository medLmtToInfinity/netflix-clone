import { useEffect, useState } from 'react'
import "./Banner.css";
import axios from '../axios';
import requests from "../Request";

function Banner() {

  const [movie, setMovie] = useState({});

  useEffect(() => {
    // console.log(performance.now())
    const fetchMovie = async () => {
      const response = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length)
        ]
      )
      return response;
    }

    fetchMovie();

  }, []);

  // 

  // console.log(movie)

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }


    
  return (
    <header className='header' style={{
        background: movie && `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}") no-repeat center center/cover`,
    }}>
        <div className='banner__contents'>
            <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>
            <div className='banner_buttons'>
                <button className='banner__button'>Play</button>
                <button className='banner__button'>My List</button>
            </div>
            <h1 className='banner_description'>{truncate(movie?.overview, 150)}</h1>
        </div>
        <div className='banner--fadeBottom' />
    </header>
  )
}

export default Banner