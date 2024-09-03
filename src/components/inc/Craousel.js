import React from 'react';
import car1 from '../img/car1.jpeg';
import car2 from '../img/car2.jpeg';
import car3 from '../img/car3.jpeg';
import car4 from '../img/car4.jpeg';
import car5 from '../img/car5.jpg';

const Craousel = () => {
  const carouselImageStyle = {
    maxWidth: '100%',
    maxHeight: '600px', // Adjust this value to set the desired max height
    objectFit: 'cover',
    margin: 'auto',
  };

  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={car2} className="d-block w-100" alt="First slide" style={carouselImageStyle} />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={car1} className="d-block w-100" alt="Second slide" style={carouselImageStyle} />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={car3} className="d-block w-100" alt="Third slide" style={carouselImageStyle} />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={car4} className="d-block w-100" alt="Fourth slide" style={carouselImageStyle} />
            <div className="carousel-caption d-none d-md-block">
              <h5>Fourth slide label</h5>
              <p>Some representative placeholder content for the fourth slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={car5} className="d-block w-100" alt="Fifth slide" style={carouselImageStyle} />
            <div className="carousel-caption d-none d-md-block">
              <h5>Fifth slide label</h5>
              <p>Some representative placeholder content for the fifth slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Craousel;
