import { useNavigate, Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const Navbar = ({ searchText, setSearchText, searchResults }) => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const updateSearchText = (e) => {
    const text = e.target.value;
    setSearchText(text);
    setShowDropdown(!!text);

    // Navigate to /search if there's input, else go back to home
    if (!text) {
      navigate("/");
    }
  };

  const handleShowAll = (e) => {
    e.preventDefault();
    setShowDropdown(false);
    navigate("/search");
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Did I Watch
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <form
              className="d-flex position-relative search-form"
              role="search"
              onSubmit={handleShowAll}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-haspopup="true"
                value={searchText}
                onChange={updateSearchText}
                onFocus={() => setShowDropdown(true)}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
              {showDropdown && searchResults.length > 0 && (
                <div
                  ref={dropdownRef}
                  className="dropdown-menu show position-absolute custom-dropdown"
                >
                  {searchResults.slice(0, 4).map((result) => (
                    <Link
                      key={result.id}
                      className="dropdown-item"
                      to={`/movies/${result.id}`}
                      onClick={() => setShowDropdown(false)}
                    >
                      {result.title}
                    </Link>
                  ))}
                  <div className="dropdown-divider"></div>
                  <button className="dropdown-item" onClick={handleShowAll}>
                    Show All Results
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
