import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

 
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

function Hero({ deviceType="desktop" }) {
  return (
   <div>
   <Carousel
   responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        showDots={true}
      >
        <div style={{ height: "300px", background: "red" }}>Slide 1</div>
        <div style={{ height: "300px", background: "blue" }}>Slide 2</div>
        <div style={{ height: "300px", background: "green" }}>Slide 3</div>
   
</Carousel>
</div>


  )
}

export default Hero

