import { useState, useEffect } from "react";
import Hero from "./Hero";
import { useParams } from "react-router-dom";

const MovieView = () => {
  const { id } = useParams();
  console.log(id)

  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const apiKey = process.env.REACT_APP_TMDB_API_KEY;
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
      .then(response => response.json())
      .then(data => {
        setMovieDetails(data)
        setIsLoading(false)
      })
  }, [id])

  function renderMovieDetails() {
    if(isLoading) {
      return <Hero text="Loading..." />
    }
    if(movieDetails) {
      //TODO deal with possible missing image
      const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
      //const posterPath = `https://image.tmdb.org/t/p/w500/null`
      const backdropUrl =`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
      const altMsg = `${movieDetails.original_title} image`

      return (
        <>
          <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
          <div className="container my-5">
            <div className="row">
              {
                posterPath &&
                  <div className="col-md-3">
                    <img src={posterPath} alt={altMsg} className="img-fluid shadow rounded" />
                  </div>
              }
              <div className="col-md-9">
                <h2>{movieDetails.original_title}</h2>
                <p className="lead">
                  {movieDetails.overview}
                </p>
              </div>
            </div>
          </div>
        </>
      )
    }
  }
  return renderMovieDetails();
};

export default MovieView;
