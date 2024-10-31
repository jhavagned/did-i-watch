import Hero from "./Hero";
import MovieCard from "./MovieCard";
import placeholderImage from "../assets/images/place-holder.png";
import { useNavigate } from "react-router-dom";

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for "${keyword}"`;
  const navigate = useNavigate();

  // Split the keyword into words and create a regex for matching
  const keywordWords = keyword.toLowerCase().split(" ");

  // Check if any search result contains all keyword words
  const hasValidResults = searchResults.some((movie) => {
    const movieTitle = movie.original_title.toLowerCase();
    return keywordWords.every((word) => movieTitle.includes(word));
  });

  // Function to split title into alphanumeric parts
  const alphanumericSort = (a, b) => {
    const partsA = a.original_title
      .toLowerCase()
      .split(/(\d+)/)
      .filter(Boolean);
    const partsB = b.original_title
      .toLowerCase()
      .split(/(\d+)/)
      .filter(Boolean);

    for (let i = 0; i < Math.min(partsA.length, partsB.length); i++) {
      const partA = partsA[i];
      const partB = partsB[i];

      // Compare numeric parts as numbers and string parts as strings
      const isNumberA = !isNaN(partA);
      const isNumberB = !isNaN(partB);

      if (isNumberA && isNumberB) {
        // Compare as numbers
        const numA = parseInt(partA, 10);
        const numB = parseInt(partB, 10);
        if (numA !== numB) {
          return numA - numB;
        }
      } else if (partA !== partB) {
        // Compare as strings
        return partA.localeCompare(partB);
      }
    }

    // If all parts are equal so far, compare by length
    return partsA.length - partsB.length;
  };

  // Sort searchResults in alphanumeric order
  const sortedResults = searchResults.sort(alphanumericSort);

  const resultsHTML = hasValidResults ? (
    sortedResults.map((movie) => (
      <MovieCard movie={movie} key={movie.id} /> // Use movie ID as key
    ))
  ) : (
    <div className="text-center mt-4">
      <div className="card">
        <img
          src={placeholderImage}
          alt="No results found"
          className="card-img-top"
          style={{ maxHeight: "300px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">No Results Found</h5>
          <p className="card-text">
            Sorry, we couldn't find any movies for your search. Please try a
            different keyword.
          </p>
          <button className="btn btn-primary" onClick={() => navigate("/")}>
            Try Again
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Hero text={title} />
      <div className="container">
        <div className="row">{resultsHTML}</div>
      </div>
    </>
  );
};

export default SearchView;
