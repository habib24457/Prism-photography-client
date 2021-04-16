import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className=" d-flex justify-content-center  mt-5 footer-design">
            <div className="row  mt-5">
                <div className="col-md-4">
                    <h3>Contact Us</h3>
                    <p>Address:Kleine Stein strasse 16B,45128, Essen.</p>
                    <p>Phone: +491632323232323</p>
                </div>

                <div className="col-md-4">
                    <h3>Quick Links</h3>
                    <ul style={{ listStyle: 'none', color: 'white' }}>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Our Team</li>
                        <li>Blog</li>
                    </ul>
                </div>

                <div className="col-md-4">
                    <h3>Social Media Links</h3>
                    <div style={{ cursor: 'pointer' }} className="d-flex justify-content-around  mt-5">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;