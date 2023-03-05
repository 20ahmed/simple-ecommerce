import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCoverflow,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import img from "../images/img";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../swiper.css";
import { useRef } from "react";
export default function Slider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  // const onAutoplayTimeLeft = (s, time, progress) => {
  //   progressCircle.current.style.setProperty("--progress", 1 - progress);
  //   progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  // };
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper mt-4 swiper-container"
      >
        <SwiperSlide className="img-fluid bg-danger">
          <img src={img[0]} alt="" />
        </SwiperSlide>
        <SwiperSlide className="img-fluid bg-info">
          {" "}
          <img src={img[1]} alt="" />
        </SwiperSlide>
        <SwiperSlide className="img-fluid bg-primary">
          {" "}
          <img src={img[2]} alt="" />
        </SwiperSlide>
        <SwiperSlide className="img-fluid bg-secondary">
          {" "}
          <img src={img[3]} alt="" />
        </SwiperSlide>
        <SwiperSlide className="img-fluid bg-success">
          {" "}
          <img src={img[4]} alt="" />
        </SwiperSlide>
        <SwiperSlide className="img-fluid bg-danger">
          {" "}
          <img src={img[5]} alt="" />
        </SwiperSlide>
        <SwiperSlide className="img-fluid bg-danger">
          {" "}
          <img src={img[6]} alt="" />
        </SwiperSlide>
        <SwiperSlide className="img-fluid bg-danger">
          {" "}
          <img src={img[7]} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
