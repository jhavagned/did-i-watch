import Hero from "./Hero";
import MovieCard from './MovieCard'

// TMDB API KEY = 63f0611b9df7534ffca1a8fa1efada53
// Example link for movie searches = https://api.themoviedb.org/3/search/movie?api_key=63f0611b9df7534ffca1a8fa1efada53&query=star%20wars&include_adult=false&language=en-US&page=1
/*curl --request GET \
     --url 'https://api.themoviedb.org/3/search/movie?query=star%20wars&include_adult=false&language=en-US&page=1' \
     --header 'Authorization: Bearer 63f0611b9df7534ffca1a8fa1efada53' \
     --header 'accept: application/json' */

// image url https://image.tmdb.org/t/p/w300/1E5baAaEse26fej7uHcjOgEE2t2.jpg

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;

  const resultsHTML = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />;
  })
 
  return (
    <>
      <Hero text={title} />
      {resultsHTML && 
        <div className="container">
            <div className="row">
                {resultsHTML}
            </div>
        </div>}
    </>
  );
}

export default SearchView;
