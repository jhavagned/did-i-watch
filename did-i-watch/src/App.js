import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import SearchView from "./components/SearchView";
import MovieView from "./components/MovieView";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [hasError, setHasError] = useState(false); // New state for error handling
  const location = useLocation();

  const showNavbarPaths = ["/", "/about", "/search"];
  const moviePathPattern = /^\/movies\/\d+$/; // Matches /movies/:id where :id is a number
  const showNavbar =
    showNavbarPaths.includes(location.pathname) ||
    moviePathPattern.test(location.pathname);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_TMDB_API_KEY;

    if (searchText.trim()) {
      // Ensure searchText is not empty
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchText}&include_adult=false&language=en-US&page=1`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setSearchResults(data.results || []); // Ensure we set results or empty array
          setHasError(false); // Reset error state on successful fetch
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
          setHasError(true); // Set error state on catch
        });
    } else {
      setSearchResults([]); // Clear search results if searchText is empty
    }
  }, [searchText]);

  return (
    <div>
      {showNavbar && (
        <Navbar
          searchText={searchText}
          setSearchText={setSearchText}
          searchResults={searchResults}
        />
      )}
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/about" element={<AboutView />} />
        <Route
          path="/search"
          element={
            hasError ? (
              <Navigate to="/404" />
            ) : (
              <SearchView keyword={searchText} searchResults={searchResults} />
            )
          }
        />
        <Route path="/movies/:id" element={<MovieView />} />
        <Route path="/404" element={<PageNotFound />} />{" "}
        {/* Define the 404 route */}
        <Route path="*" element={<Navigate to="/404" />} />{" "}
        {/* Redirect to 404 for any unmatched route */}
      </Routes>
    </div>
  );
}

export default App;
