const Hero = ({ text, backdrop }) => {
  return (
    <header className="bg-dark text-white p-5 hero-container" role="banner">
      <h1 className="hero-text">{text}</h1>
      {backdrop ? (
        <div
          className="hero-backdrop"
          style={{ backgroundImage: `url(${backdrop})` }}
          aria-label="Hero backdrop image"
        ></div>
      ) : (
        <div className="hero-fallback"></div>
      )}
    </header>
  );
};

export default Hero;
