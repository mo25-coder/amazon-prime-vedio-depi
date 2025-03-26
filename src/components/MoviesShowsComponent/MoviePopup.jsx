// Title: "Om inte",
// Year: "2001",
// imdbID: "tt0268321",
// Type: "movie",
// Poster:
//   "https://m.media-amazon.com/images/M/MV5BYjA1ZWI3MmMtMTZhNC00MzFhLWE0MzktZDQ1MDZhMjkzZGJkXkEyXkFqcGdeQXVyMTQzMjU1NjE@._V1_SX300.jpg",
import "../../assets/css/MoviesShowsComponent/MoviePopup.css";

function MoviePopup({ movie }) {
  // Movie popup that will be shown within tha CategorySlider
  return (
    <div className="movie-popup">
      <img src={movie.Poster} alt={`${movie.Title} cover photo`} />
      {/* <div className="test-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          tempore, perspiciatis sequi rerum animi saepe, excepturi aspernatur
          commodi officiis repudiandae harum adipisci necessitatibus perferendis
          ipsam minus ratione blanditiis libero quibusdam! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quidem voluptatem sed voluptas quia
          consequuntur quod sunt. Nam odio quaerat officiis sapiente minus
          excepturi magnam cumque repellendus nulla dolor! Laudantium, harum.
        </div> */}
    </div>
  );
}

export default MoviePopup;
