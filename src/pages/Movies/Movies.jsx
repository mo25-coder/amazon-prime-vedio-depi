import React, { useState, useEffect } from 'react';
import '../../assets/css/Movies.css';
import '../../assets/css/CarouselMoviesShows.css';
import CarouselMoviesShows from '../../components/CarouselMoviesShows/CarouselMoviesShows';
import MovieCard from '../../components/MoviesShowsComponent/MoviesShowsComponent'; // Ensure this import exists

function MoviesPage() {
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

  const movieCategories = [
    {
      title: 'Action Movies',
      items: [
        { title: 'The Matrix', image: 'https://picsum.photos/200/300?random=1' },
        { title: 'Mad Max: Fury Road', image: 'https://picsum.photos/200/300?random=2' },
      ],
    },
    {
      title: 'Drama Movies',
      items: [
        { title: 'The Godfather', image: 'https://picsum.photos/200/300?random=3' },
        { title: 'Forrest Gump', image: 'https://picsum.photos/200/300?random=4' },
      ],
    },
    {
      title: 'Indian Movies',
      items: [
        { title: '3 Idiots', image: 'https://picsum.photos/200/300?random=5' },
        { title: 'Kabir Singh', image: 'https://picsum.photos/200/300?random=6' },
      ],
    },
    {
      title: 'Arabic Movies',
      items: [
        { title: 'Cairo Time', image: 'https://picsum.photos/200/300?random=7' },
        { title: 'The Blue Elephant', image: 'https://picsum.photos/200/300?random=8' },
      ],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="movie-page">
      {/* Banner Section */}
      <CarouselMoviesShows />

      {/* Movie Categories */}
      {movieCategories.map((category, index) => (
        <section key={index} className="content-section">
          <h2>{category.title}</h2>
          <div className="movie-list">
            {category.items.map((item, idx) => (
              <MovieCard key={idx} title={item.title} image={item.image} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default MoviesPage;
