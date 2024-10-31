import Hero from "./Hero";

const About = () => {
  return (
    <>
      <Hero text="About Us" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <h2>Who We Are</h2>
            <p className="lead">
              Did I Watch is your ultimate companion for discovering and
              tracking your favorite movies and TV shows. We are a team of
              passionate film lovers dedicated to creating a platform that
              enhances your viewing experience.
            </p>

            <h2>Our Purpose</h2>
            <p className="lead">
              In a world overflowing with content, finding what to watch next
              can be overwhelming. Did I Watch simplifies this process by
              allowing users to search for titles, explore detailed metadata,
              and keep track of their viewing history all in one place.
            </p>

            <h2>What We Offer</h2>
            <p className="lead">
              <strong>Easy Search:</strong> Quickly find your favorite movies
              and shows with our intuitive search feature. <br />
              <strong>Comprehensive Information:</strong> Access essential
              details about each title, including synopses, ratings, and cast.{" "}
              <br />
              <strong>Watchlist Management:</strong> Effortlessly keep track of
              what you’ve watched and what you want to see next.
            </p>

            <h2>Join Our Community</h2>
            <p className="lead">
              We invite you to explore Did I Watch and join our growing
              community of film enthusiasts. Share your thoughts, discover new
              favorites, and never lose track of what you’ve watched again!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
