import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import drawPencil from "../../../../images/pencil.png";
import buySell from "../../../../images/shopping-bag.png";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";

const DrawSell = () => {
  return (
    <Container>
      <div className="row mt-5 mb-5 pt-5">
        <div className="col-md-6 d-flex">
          <div className="d-flex flex-column">
            <div>
              <img src={drawPencil} className="draw-img-style" alt="" />
            </div>

            <Link to="/drawPic">
              <button class="brand-button mt-3">Draw a Picture</button>
            </Link>
          </div>

          <div>
            <ul style={{ listStyle: "none" }}>
              <li>
                <FontAwesomeIcon
                  style={{ color: "blueViolet" }}
                  icon={faCheckDouble}
                />
                You can draw or sign.
              </li>
              <li>
                <FontAwesomeIcon
                  style={{ color: "blueViolet" }}
                  icon={faCheckDouble}
                />
                You can Download your drawing and share it with others.
              </li>
              <li>
                <FontAwesomeIcon
                  style={{ color: "blueViolet" }}
                  icon={faCheckDouble}
                />
                If there is any error while editing, please send me an email:
                habiburehman390@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="col-md-6 d-flex flex-column">
          <div className="d-flex">
            <img src={buySell} className="draw-img-style" alt="" />
            <div>
              <ul style={{ listStyle: "none" }}>
                <li>
                  <FontAwesomeIcon
                    style={{ color: "blueViolet" }}
                    icon={faCheckDouble}
                  />
                  Simply upload and edit your photo.
                </li>
                <li>
                  <FontAwesomeIcon
                    style={{ color: "blueViolet" }}
                    icon={faCheckDouble}
                  />
                  Save your edited photo
                </li>
                <li>
                  <FontAwesomeIcon
                    style={{ color: "blueViolet" }}
                    icon={faCheckDouble}
                  />
                  If there is any error while editing, please send me an email:
                  habiburehman390@gmail.com
                </li>
              </ul>
            </div>
          </div>
          <Link to="/image-editor">
            <button class="brand-button mt-3">Edit your image</button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default DrawSell;
