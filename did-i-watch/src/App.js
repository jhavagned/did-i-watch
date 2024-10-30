import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import SearchView from "./components/SearchView";
import MovieView from "./components/MovieView"
import { Routes, Route } from "react-router-dom";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => { 
    if(searchResults) {
      const apiKey = process.env.REACT_APP_TMDB_API_KEY;
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchText}&include_adult=false&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setSearchResults(data.results)
      })
    }
  }, [searchText])
  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/about" element={<AboutView />} />
        <Route
          path="/search"
          element={
            <SearchView keyword={searchText} searchResults={searchResults} />
          }
        />
        <Route path="/movies/:id" element={<MovieView />} />
        {/* TODO create 404 route and view */}
        TODO handle attempt to routes which do not exist
      </Routes>
    </div>
  );
}

export default App;
