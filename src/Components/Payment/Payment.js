import React, { useEffect, useContext, useState } from 'react';
import { Container, Row, Col, ListGroup, Nav } from 'react-bootstrap';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './PaymentCard';
import { UserContext } from '../../App';

const stripePromise = loadStripe('pk_test_51IhJfaKSu2UCBkjrmudHYyuSve1JRUdu2YnlbhaIRDGM4MM4sHkJUWrZXvficsncoRRozsKBe8QwyVaIJikKpEyp00qYSKyjSj');

const Payment = () => {

    const [loggedinUser, setLoggedinUser] = useContext(UserContext);
    const [orderedService, setOrderedService] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/getService?email=' + loggedinUser.email)
            .then(response => response.json())
            .then(data => setOrderedService(data));
    }, [loggedinUser.email])

    console.log(setLoggedinUser);
    return (
        <Container>

            <Row>
                <Nav
                    activeKey="/home"
                    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                    <Nav.Item>
                        <Nav.Link href="/home">Home</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Row>

            <Row className="mt-5 pt-5">
                <Col>
                    <h4 className="all-text-color">Your Ordered Services:{orderedService.length}</h4>
                    <ListGroup>

                        {
                            orderedService.map(service => <ListGroup.Item>{service.service}</ListGroup.Item>
                            )
                        }
                    </ListGroup>
                </Col>
                <Col>
                    <h4 className="mb-5 all-text-color">Payment</h4>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm></CheckoutForm>
                    </Elements>
                </Col>
            </Row>
        </Container>
    );
};

export default Payment;