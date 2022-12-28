import React from "react";
import "./Services.css";
import { Container } from "react-bootstrap";
import camera from "../../../images/camera.png";
import wedding from "../../../images/wedding.png";
import studio from "../../../images/studio.png";
import ServiceDetail from "../Home/ServiceDetail/ServiceDetail";

const photographyServices = [
  {
    title: "Wedding Photography",
    price: "500",
    logo: wedding,
  },
  {
    title: "Event Photography",
    price: "500",
    logo: camera,
  },
  {
    title: "Studio Photography",
    price: "500",
    logo: studio,
  },
];

const Services = () => {
  return (
    <div className="div-wrapper">
      <Container>
        <div className="d-flex justify-content-center">
          <div className="row w-75  mt-5">
            <div className="col-md-12 text-center">
              <h1>Our Services</h1>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div className="row w-75  mt-5 pb-5">
            {photographyServices.map((service) => (
              <ServiceDetail service={service}></ServiceDetail>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
