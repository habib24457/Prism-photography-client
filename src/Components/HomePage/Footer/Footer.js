import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="row  mt-5 footer-design">
      <div className="col-md-6 mt-5 text-center">
        <h3>Contact Us</h3>
        <p>Address:Essen,Germany</p>
        <p>Email:habiburehman390@gmail.com</p>
        <p>Phone: +4915758268375</p>
      </div>

      <div className="col-md-6 text-center mt-5">
        <h3>Social media Links</h3>
        <div
          style={{ cursor: "pointer" }}
          className="d-flex justify-content-around  mt-5"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
          <FontAwesomeIcon icon={faTwitter} size="2x" />
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
