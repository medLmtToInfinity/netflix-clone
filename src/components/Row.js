import axios from "../axios"
import { useEffect, useState } from "react";
import "./Row.css"

function Row( { title, fetchUrl, isLarge } ) {

  const [rowMovie, setRowMovie] = useState([]);
  const baseUrl = "https://image.tmdb.org/t/p/original";


  useEffect(() => {
    const fetchData = async () => {
        const response = await axios.get(fetchUrl);
        setRowMovie(response.data.results)
        return response;
    };

    fetchData();
  }, []);
  

  const rendredMovies = rowMovie.map(movie => {
    return<img key={movie.id} className={`row__poster ${isLarge && "row__large__poster"}`} src={`${baseUrl}${isLarge ? movie.poster_path : movie.backdrop_path}`} alt={movie?.name} />
  })


  return (
    <div className="row">
        <h2 className="row__title">{title}</h2>
        <div className="row__posters">
        {rendredMovies}
        </div>
    </div>
  )
}

export default Row