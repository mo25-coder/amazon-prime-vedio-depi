import React from 'react'
import { useState } from 'react'
import '../../assets/css/MoviesShowsComponent/MoviesShowsComponent.css'
import React from "react";
   
    import { FaPlay, FaPlus, FaInfoCircle } from "react-icons/fa";
function MoviesShowsComponent() {
  
    
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
      
    
    
}

export default MoviesShowsComponent;
