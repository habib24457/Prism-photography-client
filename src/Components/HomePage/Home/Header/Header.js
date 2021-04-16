import React from 'react';
import './Header.css';
import caro3 from '../../../../images/caro3.jpg';
import { Link } from 'react-router-dom';


const Header = () => {
    return (

        <section class="header-section">
            <div className="container">
                
                <div className="row w-100">
                    <div className="col-md-12">
                        <nav class="navbar navbar-expand-lg navbar-light ">
                            <div class="container-fluid">
                                <a class="navbar-brand" href="/">Prism Photography</a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavAltMarkup">
                                    <div class="navbar-nav">
                                        <a class="nav-link active" aria-current="page" href="/home">Home</a>
                                        <a class="nav-link" href="/dashboard">Admin</a>
                                        <a class="nav-link" href="/">Photoshoot</a>
                                        <a class="nav-link" href="/">Blog</a>
                                        <a class="nav-link" href="/">Shop</a>
                                        <a class="nav-link" href="/login">
                                            <button class="btn btn-warning">Login</button>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </nav>

                    </div>
                </div>

                <div className="d-flex justify-content-center">
                    <div className="row w-75 mt-5">
                        <div className="col-md-6 text-secondary">
                            <h1>Professional level <span style={{ color: 'rgb(76, 121, 151)' }}>Photography</span> </h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Sint qui consequatur repudiandae quaerat perspiciatis commodi!
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Sint qui consequatur repudiandae quaerat perspiciatis commodi!
                             </p>

                            <Link to="/appoint">
                                <button class="btn btn-warning">Get an Appointment</button>
                            </Link>

                        </div>

                        <div className="col-md-6 ">

                            <img src={caro3} style={{ width: '450px', height: '250px', borderRadius: '10px' }} alt="" />

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Header;