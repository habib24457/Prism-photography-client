import React from "react";
import "./Header.css";
// import caro1 from "../../../../images/caro1.jpg";
// import caro2 from "../../../../images/caro2.jpg";
// import caro3 from "../../../../images/caro3.jpg";
// import background from "../../../../images/back.png";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <div
      // style={{
      //   backgroundImage: `url(${background})`,
      //   backgroundPosition: "center",
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   width: "100vw",
      // }}
      className="background-des"
    >
      <Container>
        <div className="row mt-5 pt-5">
          <div className="col-md-6  mt-5">
            <div>
              <h1>
                Professional level{" "}
                <span style={{ color: "#ffffff" }}>Photography</span>{" "}
              </h1>
              <p>
                If you are looking for awesome photography to capture your
                memorable moments like (Wedding, Parties or Events). Prism
                Photography Studio is here to fulfill your demand.
              </p>
              <Link to="/appoint">
                <button class="brand-button">Get an Appointment</button>
              </Link>
            </div>
          </div>

          <div className="col-md-6 mt-5"></div>

          {/* <div className="col-md-6  mt-5">
            <Carousel>
              <Carousel.Item>
                <img
                  style={{
                    height: "350px",
                    width: "450px",
                    borderRadius: "2.5%",
                  }}
                  className="d-block w-100"
                  src={caro1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Awesome photography</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{
                    height: "350px",
                    width: "450px",
                    borderRadius: "2.5%",
                  }}
                  className="d-block w-100"
                  src={caro2}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Fast delivery</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{
                    height: "350px",
                    width: "450px",
                    borderRadius: "2.5%",
                  }}
                  className="d-block w-100"
                  src={caro3}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Flexible appointments</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div> */}
        </div>
      </Container>
    </div>
  );
};

export default Header;
