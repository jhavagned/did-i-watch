import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero text="Welcome to Did I Watch?" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Welcome to **Did I Watch?** – your go-to app for discovering
              movies and keeping track of what you’ve seen. Built with React.js,
              this app lets you search for movies, view details, and enjoy
              high-quality images, all powered by data from The Movie Database
              (TMDb). Future features will allow you to mark movies as “watched”
              so you can keep track of your movie history easily. Start
              exploring today and dive into the world of cinema!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
