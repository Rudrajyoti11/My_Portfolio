import React from "react";
import "./Blogs.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import blog1 from "../../img/blog1.jpg";
import blog2 from "../../img/blog2.jpeg";
import blog3 from "../../img/blog3.gif";

const Blogs = () => {
  const clients = [
    {
      img: blog3,
      description:
        "The Future of AI: How Artificial Intelligence Will Change the World"
    },
    {
      img: blog2,
      description:
        "Neuralink: The Company That Wants To Put A Chip In Your Head",
    },
    {
      img: blog1,
      description:
        "How Much Ram Do You Need",
    },
  ];



  return (
    <div className="t-wrapper" id="Blogs">
      <div className="t-heading">
        <span>Read </span>
        <span>My </span>
        <span>Blogs</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="Blogs" id="blogs">
                <img src={client.img} alt="" />
                <span>{client.description}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Blogs;
