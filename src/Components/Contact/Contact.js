import React from "react";
import NavigationBar from "../HomePage/Home/NavigationBar/NavigationBar";
import Footer from "../HomePage/Footer/Footer";
import "./Contact.css";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <div className="row">
        <div className="col-md-6">
          <>
            <Row className="text-center mt-5 pt-5">
              <Col className="second-color myText-style">
                <h1>Contact me</h1>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <form
                  action="https://formsubmit.co/habiburehman390@gmail.com"
                  method="POST"
                >
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      id=""
                      aria-describedby="emailHelp"
                      placeholder="Enter Your email"
                      required
                    />
                    <br />
                    <input
                      type="text"
                      class="form-control"
                      id=""
                      aria-describedby="emailHelp"
                      placeholder="Enter Your Name"
                      required
                    />
                    <br />
                    <input
                      type="hidden"
                      name="_next"
                      value="https://habibur-portfolio.netlify.app/"
                    />
                    <input type="hidden" name="_captcha" value="false" />
                    <textarea
                      class="form-control"
                      id=""
                      rows="3"
                      name="message"
                      placeholder="Write a message"
                      required
                    ></textarea>
                    <br />
                    <button type="submit" class="brand-button">
                      Send Email
                    </button>
                  </div>
                </form>
              </Col>
            </Row>
          </>
        </div>
        <div className="col-md-6 mt-5 pt-5">
          <div class="card mb-3" style={{ maxWidth: "540px" }}>
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="https://image.ibb.co/dUTfmJ/profile_img.jpg"
                  class="img-fluid rounded-start"
                  alt="profile"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">John Doe</h5>
                  <p class="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                  <div className="col-md-4">
                    <div
                      style={{ cursor: "pointer" }}
                      className="d-flex justify-content-around"
                    >
                      <FontAwesomeIcon
                        className="mr-2"
                        icon={faFacebook}
                        size="2x"
                      />
                      <FontAwesomeIcon
                        className="mr-2"
                        icon={faTwitter}
                        size="2x"
                      />
                      <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
