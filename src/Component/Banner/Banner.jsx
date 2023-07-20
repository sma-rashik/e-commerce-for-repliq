import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/stadium1.jpg";
import img2 from "../../assets/stadium2.jpg";
import img3 from "../../assets/stadium3.jpg";
const Banner = () => {
  return (
    // <Carousel>
    //   <div>
    //     <img src={img1} />
    //     <h2 className="text-center text-5xl font-bold shadow-lg text-white -mt-[600px]">
    //       The Best Cricket <br /> Academy Forever
    //     </h2>
    //   </div>
    //   <div>
    //     <img src={img2} />
    //   </div>
    //   <div>
    //     <img src={img3} />
    //   </div>
    // </Carousel>
    <>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full" />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
          <p className="text-white absolute text-5xl font-bold shadow-lg  bottom-0  mb-[500px] left-0 right-0 text-center">
            The Best Cricket <br /> Academy Forever
          </p>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full" />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
          <p className="text-5xl font-bold shadow-lg text-black absolute mb-[500px]  bottom-0 left-0 right-0 text-center">
            The Best Cricket <br /> Academy Forever
          </p>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full" />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
          <p className="text-5xl font-bold shadow-xl mb-[500px] text-white absolute bottom-0 left-0 right-0 text-center">
            The Best Cricket <br /> Academy Forever
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
