import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import searchImg from "../../../images/research.png";
import { Container } from "react-bootstrap";

const SearchRandomImg = () => {
  return (
    <Container>
      <div className="row wrapper">
        <div className="col-md-6">
          <img src={searchImg} className="img-style" alt="" />
        </div>
        <div className="col-md-6 mt-5">
          <h2 style={{ fontStyle: "revert-layer" }}>
            Explore more, search more.
          </h2>
          <p> API used for searching: pixabay.com</p>

          <Link to="/searchPhoto">
            <button class="brand-button mt-3">Search random photos</button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default SearchRandomImg;
