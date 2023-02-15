import React from "react";
import { Container } from "react-bootstrap";
import Canvas from "./Canvas";
import NavigationBar from "../HomePage/Home/NavigationBar/NavigationBar";

const Draw = () => {
  return (
    <Container>
      <NavigationBar />
      <div className="row mt-5">
        <div className="col-md-3"></div>
        <div className="col-md-6 mt-5">
          <Canvas width={700} height={500} />
        </div>
        <div className="col-md-3"></div>
      </div>
    </Container>
  );
};

export default Draw;
