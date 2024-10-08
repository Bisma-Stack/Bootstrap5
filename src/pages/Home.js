import React from 'react';
import Craousel from '../components/inc/Craousel';
import { Link } from 'react-router-dom';
import VMC from '../pages/inc/VMC';
// import service1 from '../components/img/service1.png'
// import service2 from '../components/img/service2.jpeg'
import service3 from '../components/img/Services (3).jpg'

const Home = () => {
  return (
    <div>
      <Craousel />
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
      {/* Our Mission Vission and Values */}
      <VMC />
                                {/* Our Services */}
      <section className="section border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4">
              <h3 className='main-heading'>Our Services</h3>
              <div className='underline mx-auto'></div>
            </div>
            <div className='col-md-4 '>
              <div className='card shadow'>
                  <img src={service3} className='w-100 border-bottom shadow p-4 ' alt='Services' />
                <div className='card-body'>
              <h6>Service 1</h6>
              <div className='underline'></div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <div className="link-container">
                <Link to="/service" className='btn btn-warning shadow'>Read More</Link>
              </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 '>
              <div className='card shadow'>
                  <img src={service3} className='w-100 border-bottom shadow p-4' alt='Service 2' />
                <div className='card-body'>
              <h6>Service 2</h6>
              <div className='underline'></div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <div className="link-container">
                <Link to="/service" className='btn btn-warning shadow'>Read More</Link>
              </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 '>
              <div className='card shadow'>
                  <img src={service3} className='w-100 border-bottom p-4 shadow' alt='Service 3' />
                <div className='card-body'>
              <h6>Service 3</h6>
              <div className='underline'></div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <div className="link-container">
                <Link to="/service" className='btn btn-warning shadow'>Read More</Link>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
