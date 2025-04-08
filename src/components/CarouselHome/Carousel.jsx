import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    type: "video",
    media:
      "https://avodmp4s3ww-a.akamaihd.net/ww_iad/48b2/c65b/d0bf/4c8e-ac06-d55f6efa242b/16d91ce8-e350-4372-9351-6380fa3f09c4_video_480p_900kbps_audio_aaclc_128kbps.mp4",
    title: "Blockbusters",
  },
  {
    id: 2,
    type: "video",
    media:
      "https://s3-iad-ww.cf.videorolls.row.aiv-cdn.net/3525/91c3/58e3/447e-99cd-eb3b56e51e00/ee48e1ea-7bc5-48cf-a04b-cdbfdea16bbe_video_480p_900kbps_audio_aaclc_128kbps.mp4",
    title: "Exclusive Preview",
  },
  {
    id: 3,
    type: "video",
    media:
      "https://s3-iad-2.cf.trailer.row.aiv-cdn.net/ed34/c69f/652d/4425-bf9c-634dc25792ab/72b64760-5e06-4d17-bb44-449f018e016c_video_900_audio_aaclc_128.mp4",
    title: "Trending Now",
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
            {slide.type === "image" ? (
              <img
                src={slide.media}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                src={slide.media}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-10 text-white">
              <h2 className="text-5xl font-bold">{slide.title}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
