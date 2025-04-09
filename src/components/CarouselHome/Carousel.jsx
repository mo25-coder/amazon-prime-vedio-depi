// Carousel.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import {
  Play,
  Film,
  Plus,
  ThumbsUp,
  ThumbsDown,
  Share2,
  Download,
  Check, // add this

} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    type: "video",
    media:
      "https://avodmp4s3ww-a.akamaihd.net/ww_iad/48b2/c65b/d0bf/4c8e-ac06-d55f6efa242b/16d91ce8-e350-4372-9351-6380fa3f09c4_video_480p_900kbps_audio_aaclc_128kbps.mp4",
    title: "The Big Country",
    description:
      "Burl Ives earned a Best Supporting Actor Oscar for his portrayal of a family patriarch involved in a bitter land feud in this explosive western drama that also features a sumptuous musical score.",
    year: 1958,
    rating: "7+",
    duration: "2 h 46 min",
    imdb: "7.9",
    tags: ["Western", "Ambitious", "Emotional", "Exciting"],
  },
  {
    id: 2,
    type: "video",
    media:
      "https://s3-iad-ww.cf.videorolls.row.aiv-cdn.net/3525/91c3/58e3/447e-99cd-eb3b56e51e00/ee48e1ea-7bc5-48cf-a04b-cdbfdea16bbe_video_480p_900kbps_audio_aaclc_128kbps.mp4",
    title: "Blockbusters",
    description:
      "A thrilling blockbuster experience featuring stunning visuals and heart-pounding action sequences.",
    year: 2022,
    rating: "16+",
    duration: "2 h 12 min",
    imdb: "8.2",
    tags: ["Action", "Thrilling", "Visual Effects", "Popular"],
  },
  {
    id: 3,
    type: "video",
    media:
      "https://s3-iad-2.cf.trailer.row.aiv-cdn.net/ed34/c69f/652d/4425-bf9c-634dc25792ab/72b64760-5e06-4d17-bb44-449f018e016c_video_900_audio_aaclc_128.mp4",
    title: "Trending Now",
    description:
      "Explore what's trending today with top picks curated just for you.",
    year: 2023,
    rating: "13+",
    duration: "1 h 58 min",
    imdb: "7.6",
    tags: ["Trending", "Fresh", "Editor's Pick"],
  },
];

export default function Carousel() {
  return (
    <div className="w-full h-screen">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        loop
        navigation
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            <video
              src={slide.media}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />

            {/* Prime-style bottom-left overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent text-white flex items-end">
              <div className="p-6 md:p-12 max-w-2xl space-y-4">
                <div className="text-sky-400 font-semibold text-sm">prime</div>
                <h1 className="text-3xl md:text-5xl font-bold">
                  {slide.title}
                </h1>
                <p className="text-base md:text-lg text-gray-200">
                  {slide.description}
                </p>
                <div className="flex items-center gap-3 text-sm text-gray-300 flex-wrap">
                  <span>IMDb {slide.imdb}</span>
                  <span>{slide.duration}</span>
                  <span>{slide.year}</span>
                  <span className="bg-white text-black text-xs font-semibold px-1 rounded-sm">
                    X-RAY
                  </span>
                  <span>{slide.rating}</span>
                </div>
                <div className="flex flex-wrap gap-2 text-sm text-gray-400">
                  {slide.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="underline underline-offset-4 hover:text-white cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

             {/* Buttons Row */}
              <div className="hidden lg:flex  lg:gap-3 pt-4 w[80px]">
                <MainButton icon={<Play size={20} />} label="Play" />
                <CircleButton icon={<Film size={20} />} label="Watch Trailer" />
                <CircleButton icon={<Plus size={20} />} label="Add to Watchlist" />
                <CircleButton icon={<ThumbsUp size={20} />} label="Like" />
                <CircleButton icon={<ThumbsDown size={20} />} label="Dislike" />
                <CircleButton icon={<Download size={20} />} label="Download" />
                <CircleButton icon={<Share2 size={20} />} label="Share" />
              </div>


              <div className="text-sm text-gray-300 pt-2 left-0 bottom-0 flex items-center gap-2">
  <BlueCheckIcon />
  Included with Prime
</div>


              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}// Main Play Button (rectangle)// Main Play Button (rectangle)
function MainButton({ icon, label }) {
  return (
    <button className="flex items-center justify-center gap-2 bg-white text-black px-5 py-2 rounded-md text-sm font-semibold hover:bg-gray-200 transition hidden lg:flex">
      {icon}
      {label}
    </button>
  );
}

// Other Action Buttons (circle with tooltips)
function CircleButton({ icon, label }) {
  return (
    <button
      className="relative group flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition hidden lg:flex"
      aria-label={label}
    >
      {icon}
      <span className="absolute bottom-[-1.5rem] left-1/2 -translate-x-1/2 text-xs bg-black/80 text-white px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
        {label}
      </span>
    </button>
  );
}
function BlueCheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4 text-blue-500 inline-block mr-1"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path d="M11.120 2.039 C 8.641 2.287,6.414 3.362,4.761 5.107 C 1.806 8.228,1.158 12.819,3.137 16.623 C 3.620 17.552,4.164 18.288,4.938 19.061 C 5.930 20.051,7.038 20.789,8.272 21.278 C 11.634 22.610,15.313 22.080,18.200 19.845 C 18.637 19.507,19.507 18.637,19.845 18.200 C 21.256 16.378,22.000 14.236,22.000 12.000 C 22.000 7.432,18.842 3.387,14.430 2.303 C 13.446 2.062,12.028 1.948,11.120 2.039 M17.092 8.191 C 17.410 8.341,17.660 8.592,17.816 8.920 C 17.926 9.151,17.940 9.221,17.940 9.541 C 17.940 9.869,17.928 9.927,17.805 10.181 C 17.679 10.443,17.480 10.651,14.545 13.588 C 11.578 16.558,11.406 16.723,11.140 16.848 C 10.888 16.967,10.824 16.980,10.500 16.980 C 10.176 16.980,10.112 16.967,9.860 16.848 C 9.604 16.726,9.466 16.600,8.193 15.328 C 6.915 14.051,6.794 13.918,6.672 13.660 C 6.554 13.408,6.540 13.344,6.540 13.020 C 6.540 12.700,6.554 12.631,6.664 12.400 C 6.821 12.070,7.070 11.821,7.400 11.664 C 7.631 11.554,7.700 11.540,8.020 11.540 C 8.343 11.540,8.408 11.554,8.654 11.670 C 8.891 11.782,9.036 11.907,9.714 12.578 L 10.500 13.356 13.020 10.843 C 15.629 8.240,15.687 8.188,16.110 8.081 C 16.380 8.013,16.817 8.061,17.092 8.191" />
    </svg>
  );
}
