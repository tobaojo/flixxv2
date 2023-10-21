import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "./Swiper.css";

const SwiperContent = ({ movies, baseUrl }) => {
  const width = "w500";
  console.log(movies);
  return (
    <>
      <h2>Now Playing</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide changed")}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="swiper-wrapper"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id} className="swiper-slide">
            <img src={baseUrl + width + movie.poster_path} alt="" />
            <p>{movie.title}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperContent;
