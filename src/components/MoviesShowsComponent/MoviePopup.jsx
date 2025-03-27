import styled from "styled-components";
import "../../assets/css/MoviesShowsComponent/MoviePopup.css";
import {
  CheckIcon,
  NoSymbolIcon,
  PlayIcon,
  PlusIcon,
} from "@heroicons/react/16/solid";
import { TextWrapper } from "../../utils/textWrapper";
const StyledMoviePopup = styled.div`
  height: 100%;
  width: 100%;
  overflow: visible;
  position: relative;
  transform-style: preserve-3d;
  z-index: 10;

  .movie-details {
    display: none;
    flex-direction: column;
    align-items: start;
    gap: 10px;
    background-color: #eceaea;
    border-radius: 0 0 var(--border-radius);
    margin-top: -10px;
    padding: 10px 15px;
    .play-btn {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      background-color: #bcbaba;
      padding: 8px 0;
      border-radius: var(--border-radius);
    }
    .action-btns * {
      border-radius: 100%;
      background-color: #bcbaba;
      padding: 10px;
    }
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;

      svg {
        background-color: #19d7f0;
        padding: 2px;
        color: white;
        border-radius: 100%;
      }
    }
    .info {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      span {
        background-color: #bcbaba;
        border-radius: var(--border-radius);
        padding: 4px;
        font-weight: 600;
      }
    }
    p {
      text-align: start;
    }
  }
  &:hover {
    z-index: 999;
    isolation: isolate;
    transform: translateX(-23px) scale(1.2);
    img {
      border-radius: var(--border-radius) var(--border-radius) 0 0;
    }
    transition: 0.2s ease;
    & .movie-details {
      display: flex;
    }
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    cursor: pointer;
  }
`;
function MoviePopup({ movie }) {
  // Movie popup that will be shown within tha CategorySlider
  return (
    <StyledMoviePopup className={`movie-popup`}>
      <img src={movie.Poster} alt={`${movie.Title} cover photo`} />
      <div className={`movie-details`}>
        <h3>{movie.Title}</h3>
        <div className="play-btn">
          <PlayIcon width={25} /> Play
        </div>
        <div className="action-btns">
          <PlusIcon width={40} /> <NoSymbolIcon width={40} />
        </div>
        <span>
          <CheckIcon width={15} /> included with prime
        </span>
        <div className="info">
          {movie.Year} 1h 35 min <span>+16</span>
        </div>
        <p>
          {TextWrapper(`
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
          officia velit dicta at doloribus minima adipisci, a suscipit
          reprehenderit animi explicabo eligendi nesciunt ratione tenetur
          repellat impedit dolore qui quisquam veritatis magnam error et. Neque
          modi earum illo accusamus doloremque!
          `)}
        </p>
      </div>
    </StyledMoviePopup>
  );
}

export default MoviePopup;
