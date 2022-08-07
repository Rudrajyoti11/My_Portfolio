import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import port3 from "../../img/port3.png";
import Zomato from "../../img/Zomato.png";
import port5 from "../../img/port5.png";
import MusicAppp from "../../img/musicappp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img href="ttps://github.com/Rudrajyoti11?tab=repositories" src={port3} alt=""  />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Zomato} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicAppp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={port5} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
