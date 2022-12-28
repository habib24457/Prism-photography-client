import React, { useState, useEffect } from "react";
import { Row, Col, Navbar, Nav, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCameraRetro,
  faUsersCog,
  faShoppingCart,
  faPhone,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

const NavigationBar = () => {
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const history = useHistory();

  useEffect(() => {
    const mail = sessionStorage.getItem("email");
    setEmail(mail);
    //console.log(email);
  }, [isLoggedin]);

  const handlesignOut = () => {
    sessionStorage.removeItem("email");
    setIsLoggedIn(false);
    history.replace("/contact");
  };

  //console.log(isLoggedin, email);

  return (
    <Container>
      <Row>
        <Col>
          <Navbar
            collapseOnSelect
            expand="lg"
            style={{ backgroundColor: " #378369" }}
            fixed="top"
          >
            <Navbar.Brand href="/home">
              <FontAwesomeIcon
                style={{ color: "#ffffff" }}
                icon={faCameraRetro}
              />
              <span
                style={{
                  color: "#ffffff",
                  padding: "10px",
                  textAlign: "center",
                }}
              >
                Prism Photography
              </span>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              id="responsive-navbar-nav"
              className="justify-content-end"
            >
              <Nav>
                <Nav.Link href="/home">
                  <FontAwesomeIcon style={{ color: "#ffffff" }} icon={faHome} />
                  <span style={{ color: "#ffffff", padding: "10px" }}>
                    Home
                  </span>
                </Nav.Link>

                <Nav.Link href="/checkAdmin">
                  <FontAwesomeIcon
                    style={{ color: "#ffffff" }}
                    icon={faUsersCog}
                  />
                  <span style={{ color: "#ffffff", padding: "10px" }}>
                    Admin
                  </span>
                </Nav.Link>
                <Nav.Link href="/dashboard">
                  <FontAwesomeIcon
                    style={{ color: "#ffffff" }}
                    icon={faShoppingCart}
                  />
                  <span style={{ color: "#ffffff", padding: "10px" }}>
                    Basket
                  </span>
                </Nav.Link>
                <Nav.Link href="/contact">
                  <FontAwesomeIcon
                    style={{ color: "#ffffff" }}
                    icon={faPhone}
                  />
                  <span style={{ color: "#ffffff", padding: "10px" }}>
                    Contact
                  </span>
                </Nav.Link>

                {email ? (
                  <button
                    className="brand-button"
                    onClick={() => handlesignOut()}
                  >
                    Logout
                  </button>
                ) : (
                  <Link to="/login">
                    <button
                      onClick={() => setIsLoggedIn(true)}
                      className="brand-button"
                    >
                      Login
                    </button>
                  </Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

export default NavigationBar;
