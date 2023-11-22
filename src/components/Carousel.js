import React from 'react';
import slider1 from '../assets/img/slider1.png'
import slider2 from '../assets/img/slider2.png'
import slider3 from '../assets/img/slider3.png'

const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={slider1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={slider2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={slider3} className="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  );
};

export default Carousel;