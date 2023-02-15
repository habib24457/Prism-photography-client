import React from "react";
import { Container } from "react-bootstrap";
import NavigationBar from "../HomePage/Home/NavigationBar/NavigationBar";
import "./image-editor.css";
import Main from "./Main/Main";

const ImageEditor = () => {
  return (
    <>
      <NavigationBar />
      <Container>
        <div className="row mt-5">
          <Main />
        </div>
      </Container>
    </>
  );
};

export default ImageEditor;
