import { useState, useEffect } from "react";
import Hero from "./Hero";
import { useParams, Navigate } from "react-router-dom";
import placeholderImage from "../assets/images/place-holder.png";

const MovieView = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_TMDB_API_KEY;
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
        );
        if (!response.ok) throw new Error("Failed to fetch movie details");
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  const renderMovieDetails = () => {
    if (isLoading) return <Hero text="Loading..." />;
    if (hasError)
      return  <Navigate to="/404" />;

    const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";
    const posterUrl = movieDetails.poster_path
      ? `${BASE_IMAGE_URL}${movieDetails.poster_path}`
      : placeholderImage;
    const backdropUrl = movieDetails.backdrop_path
      ? `${BASE_IMAGE_URL}${movieDetails.backdrop_path}`
      : placeholderImage;

    return (
      <>
        <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
        <div className="container my-5">
          <div className="row">
            <div className="col-md-3">
              <img
                src={posterUrl}
                alt={`${movieDetails.original_title} poster`}
                className="img-fluid shadow rounded"
              />
            </div>
            <div className="col-md-9">
              <h2>{movieDetails.original_title}</h2>
              <p className="lead">
                {movieDetails.overview ||
                  "No overview available for this movie."}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };

  return renderMovieDetails();
};

export default MovieView;
