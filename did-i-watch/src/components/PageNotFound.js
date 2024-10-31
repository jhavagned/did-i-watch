import React from "react";
import { useNavigate } from "react-router-dom";
import notFoundImage from "../assets/images/chucky.jpg";

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="container mt-5 page-not-found-container">
      <div className="row align-items-center">
        {/* Left Column for the Image */}
        <div className="col-md-6">
          <img
            src={notFoundImage}
            alt="Chucky looking for you"
            className="img-fluid shadow rounded page-not-found-image"
          />
        </div>
        {/* Right Column for the Text Content */}
        <div className="col-md-6 text-center">
          <h1 className="page-not-found-heading">404</h1>
          <h2 className="page-not-found-subheading">Oh No! 🤖 </h2>
          <h3 className="page-not-found-subheading">
            Chucky is looking for you...
          </h3>
          <p className="page-not-found-description">
            It seems the page you were looking for is missing
          </p>
          <p className="page-not-found-description">
            Don't worry! Just click the button below to escape back to safety.
          </p>
          <button
            onClick={handleGoHome}
            className="btn btn-primary page-not-found-btn"
          >
            Take Me Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
