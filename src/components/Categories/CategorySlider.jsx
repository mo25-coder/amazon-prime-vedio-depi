import MoviePopup from "../MoviesShowsComponent/MoviePopup";

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import "../../assets/css/Categories/CategorySlider.css";
// import Swiper core and required modules
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CategorySlider({ data }) {
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <header>
        <h1>{data.description}</h1>
        <button onClick={() => navigate(`/Category/${data.category}`)}>
          See More <ArrowRightIcon width={30} />
        </button>
      </header>
      <div
        className="swiper-container"
        onMouseEnter={() => setIsMouseEnter(true)}
        onMouseLeave={() => setIsMouseEnter(false)}
      >
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={3}
          navigation={{
            nextEl: ".button-next",
            prevEl: ".button-prev",
          }}
          loop={true}
        >
          {data.movies.map((mv) => (
            <SwiperSlide key={mv.Title}>
              <MoviePopup movie={mv} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={`button-next ${isMouseEnter ? "active" : ""}`}>
          <ArrowRightIcon width={20} color="white" />
        </div>
        <div className={`button-prev ${isMouseEnter ? "active" : ""}`}>
          <ArrowLeftIcon width={20} color="white" />
        </div>
      </div>
    </>
  );
}

export default CategorySlider;
