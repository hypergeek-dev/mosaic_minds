import React from 'react';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  const imageUrl = "https://res.cloudinary.com/dgvipn16a/image/upload/v1706258978/zadwsvwqpeeazdb0jokk.png";
  return (
    <>
      <div className="hero" aria-label="Hero Banner">
        <img src={imageUrl} alt="Hero" className="hero_image" />
      </div>
      <div className="hero_quote text-center"> 
        <p>"Diversity: the art of thinking independently together." <br/> - Malcolm Forbes</p>
      </div>
    </>
  );
};

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <section className="container mt-4">
        <div className="row justify-content-center">
          <div className="col text-center button-box mb-3">
            <Link to="/meeting-search-page" className="btn btn-primary btn-lg">Search Meetings</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
