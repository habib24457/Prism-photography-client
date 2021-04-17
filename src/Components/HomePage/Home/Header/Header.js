import React from 'react';
import './Header.css';
import photoBack from '../../../../images/photoBack.jpg';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const Header = () => {
    return (

        <Container>
            <Row md={{ span: 6, offset: 3 }} className="mt-5 pt-5">
                <Col xs={12} md={8}>
                    <img src={photoBack} style={{
                        width: '750px',
                        height: '550px', borderRadius: '10px'
                    }} alt="" />
                </Col>

                <Col xs={6} md={4} className="mt-5">
                    <div>
                        <h1>Professional level <span style={{ color: 'rgb(76, 121, 151)' }}>Photography</span> </h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Sint qui consequatur repudiandae quaerat perspiciatis commodi!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Sint qui consequatur repudiandae quaerat perspiciatis commodi!
                             </p>

                        <Link to="/appoint">
                            <button class="btn btn-warning">Get an Appointment</button>
                        </Link>
                    </div>
                </Col>


            </Row>

        </Container>
    );
};

export default Header;