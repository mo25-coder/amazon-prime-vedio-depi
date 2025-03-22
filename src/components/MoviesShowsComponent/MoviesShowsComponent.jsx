import React from "react";
import "../../assets/css/MoviesShowsComponent.css";
import { FaPlay, FaPlus, FaInfoCircle } from "react-icons/fa";

const MovieCard = ({ title, image }) => {
  return (
    <div className="movie-card">
      <img src={image} alt={title} />

      {/* Play Button (Big & Centered on Hover) */}
      <button className="play-btn">
        <FaPlay />
      </button>

      {/* Overlay (Appears on Hover) */}
      <div className="overlay">
        <div className="desc">{title}</div>
        <div className="actions">
          <button className="icon-btn"><FaPlus /></button>
          <button className="icon-btn"><FaInfoCircle /></button>
        </div>
        <div className="tags">
          <span className="tag">✅ Included with Prime</span>
          <span className="tag">NEW MOVIE</span>
          <span className="tag">16+</span>
        </div>
      </div>
    </div>
  );
};

function MoviesShowsComponent() {
  const movies = [
    { title: "Inception", image: "https://picsum.photos/200/300?random=1" },
    { title: "Interstellar", image: "https://picsum.photos/200/300?random=2" },
    { title: "Avengers", image: "https://picsum.photos/200/300?random=3" },
    { title: "Titanic", image: "https://picsum.photos/200/300?random=4" },
  ];

  return (
    <div className="movies-container">
      {movies.map((movie, index) => (
        <MovieCard key={index} title={movie.title} image={movie.image} />
      ))}
    </div>
  );
}

export default MoviesShowsComponent;
export { MovieCard }; // Exported for use in Movies.jsx if needed
