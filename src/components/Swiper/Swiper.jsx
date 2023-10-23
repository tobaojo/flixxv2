import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "./Swiper.css";

const SwiperContent = ({ movies, baseUrl }) => {
  const width = "w500";
  return (
    <>
      <div className="now-playing">
        <div className="container">
          <h2>Now Playing</h2>
          <Swiper
            spaceBetween={40}
            slidesPerView={3}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="swiper-wrapper"
          >
            {movies.map((movie) => (
              <SwiperSlide key={movie.id} className="swiper-slide">
                <Link to={`/movie/${movie.id}`}>
                  <img src={baseUrl + width + movie.poster_path} alt="" />
                  <p>{movie.title}</p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default SwiperContent;
