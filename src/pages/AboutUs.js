import React from 'react';
import { Link } from 'react-router-dom';
import VMC from './inc/VMC';
const AboutUs = () => {
  return (
    <div>
    <div className=" section container mt-5">
      <h1>About Us</h1>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className='main-heading'>Our Company</h3>
              <div className='underline mx-auto'></div>
              <p className='paragraph'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <div className="link-container">
                <Link to="/about" className='btn btn-warning shadow'>Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
      <VMC/>
      </div>
  );
};

export default AboutUs;
