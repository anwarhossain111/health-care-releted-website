import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.png.jpg'
import banner2 from '../../../images/banner/banner2.png.webp'
import banner3 from '../../../images/banner/banner3.png.webp'

const Banner = () => {
    return (
        <>
        <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
        </>
    );
};

export default Banner;