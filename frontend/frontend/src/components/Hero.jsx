import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Hero() {
  return (
    // Applied the height here and kept it consistent
<div className=" relative w-full " >
      <Swiper
       /*lassName="w-full h-full"*/
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
       /*avigation={window.innerWidth > 768}*/
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >

        <SwiperSlide>
          <div className="relative w-full  h-[450px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
            <img
            src="/img_1.jpg"
            alt="Slide 1"
            className="absolute inset-0 w-full h-full object-cover"
          />
          </div>
          
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full  h-[450px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
            <img
            src="/img_2.jpg"
            alt="Slide 2"
          className="absolute inset-0 w-full h-full object-cover"    />
                </div>

        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full  h-[450px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
            <img
            src="/img_3.jpg"
            alt="Slide 3"
            className="absolute inset-0 w-full h-full object-cover"/>
          </div>

        </SwiperSlide>
      </Swiper>
    </div>
  );
}