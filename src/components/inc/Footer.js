import React from 'react'

const Footer = () => {
    return (
        <div className='footer'>
        <footer className="bg-dark text-white pt-5 pb-4">
            <div className="container text-center text-md-left">
                <div className="row text-center text-md-left">
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold">Company Name</h5>
                        <p className='text-white'>Here you can use rows and columns to organize your footer content. Use this space to give a brief description of your company or services.</p>
                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold">Products</h5>
                        <p>
                            <a href="/" className="text-white">Product 1</a>
                        </p>
                        <p>
                            <a href="/" className="text-white" >Product 2</a>
                        </p>
                        <p>
                            <a href="/" className="text-white" >Product 3</a>
                        </p>
                        <p>
                            <a href="/" className="text-white">Product 4</a>
                        </p>
                    </div>

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold">Useful Links</h5>
                        <p>
                            <a href="/" className="text-white" >Your Account</a>
                        </p>
                        <p>
                            <a href="/" className="text-white" >Become an Affiliate</a>
                        </p>
                        <p>
                            <a href="/" className="text-white" >Shipping Rates</a>
                        </p>
                        <p>
                            <a href="/" className="text-white" >Help</a>
                        </p>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold">Contact</h5>
                        <p className='text-white'>
                            <i className=" fas fa-home mr-3 text-white"></i> H # 1,Street # 7,Farooqiya Colony
                        </p>
                        <p className='text-white'>
                            <i className="fas fa-envelope mr-3 text-white"></i> bismajaved230@gmail.com
                        </p>
                        <p className='text-white '>
                            <i className="fas fa-phone mr-3 text-white"></i> +923020426209
                        </p>
                    </div>
                </div>

                <hr className="mb-4"/>

                    <div className="row align-items-center">
                        <div className="col-md-7 col-lg-8">
                                <p className='text-white'>© 2024 All Rights Reserved by <span>Bisma :)</span></p>
                        </div>

                        <div className="col-md-5 col-lg-4">
                            <div className="text-center text-md-right">
                                <ul className="list-unstyled list-inline">
                                    <li className="list-inline-item">
                                        <a href="/" className="btn-floating btn btn-lg text-white ;"><i className="fab fa-facebook"></i></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="/" className="btn-floating   btn btn-lg text-white font-size: 30px;"><i className="fab fa-google-plus"></i></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="/" className="btn-floating text-white  btn btn-lg font-size: 30px;"><i className="fab fa-linkedin"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
        </footer>
        </div>
    )
}

export default Footer
