import React, { useState, useEffect } from 'react';
import '.../assets/css/CarouselMoviesShows/CarouselMoviesShows.css';

const BannerCarousel = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [showMainDescription, setShowMainDescription] = useState(false);
  const [showSecondaryDescription, setShowSecondaryDescription] = useState(false);

  const banners = [
    {
      title: 'Be Happy',
      tagline: 'A joyful journey',
      description: 'When his daughter sets her heart on a dance competition, a devoted single father must navigate a world of chaos to make her dreams come true.',
      secondaryDescription: 'A heartwarming tale of family and perseverance.',
      image: 'https://cdn.theasc.com/Dune-Featured.jpg',
      included: 'Included with Prime',
    },
    {
      title: 'The Wheel of Time',
      tagline: 'First 3 episodes available',
      description: 'Season 3 - In a fantasy world, a powerful sorceress guides five youths on a perilous journey. Based on the book series by Robert Jordan.',
      secondaryDescription: 'A tide sweeping us along against our control.',
      image: 'https://cdn.theasc.com/Dune-Featured.jpg',
      included: 'Included with Prime',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const handleNext = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  return (
    <div className="CarouselMoviesShows">
      <img src={banners[currentBanner].image} alt={banners[currentBanner].title} className="CarouselMoviesShows-image" />
      <div className="CarouselMoviesShows-content">
        <div
          className="title-container"
          onMouseEnter={() => {
            setShowMainDescription(true);
            setShowSecondaryDescription(true);
          }}
          onMouseLeave={() => {
            setShowMainDescription(false);
            setShowSecondaryDescription(false);
          }}
        >
          <h1>{banners[currentBanner].title}</h1>
          <p className="tagline">{banners[currentBanner].tagline}</p>
          {showMainDescription && <p className="main-description">{banners[currentBanner].description}</p>}
          <div className="CarouselMoviesShows-buttons">
            <button className="add-to-list">+</button>
            <button className="info">ⓘ</button>
          </div>
          <span className="included-with-prime">{banners[currentBanner].included}</span>
        </div>
        {showSecondaryDescription && (
          <div className="description-container">
            <p className="secondary-description">{banners[currentBanner].secondaryDescription}</p>
          </div>
        )}
      </div>
      <button className="arrow left-arrow" onClick={handlePrev}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button className="arrow right-arrow" onClick={handleNext}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div className="CarouselMoviesShows-dots">
        {banners.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentBanner === index ? 'active' : ''}`}
            onClick={() => setCurrentBanner(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
