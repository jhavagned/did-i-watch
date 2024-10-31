import { Link } from "react-router-dom";
import placeholderImage from "../assets/images/place-holder.png";

const MovieCard = ({ movie }) => {
  const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";
  const posterUrl = movie.poster_path
    ? `${BASE_IMAGE_URL}${movie.poster_path}`
    : placeholderImage;
  const dataUrl = `/movies/${movie.id}`;
  const altText = movie.original_title || "Movie poster";

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 my-4">
      <div className="card">
        <img src={posterUrl} className="card-img-top" alt={altText} />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <Link
            to={dataUrl}
            className="btn btn-primary"
            aria-label={`View details for ${movie.original_title}`}
          >
            Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
