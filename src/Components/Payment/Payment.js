import React, { useEffect, useContext, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./PaymentCard";
import { UserContext } from "../../App";
import NavigationBar from "../HomePage/Home/NavigationBar/NavigationBar";
import { API_URL } from "../Constants/Constant";

const stripePromise = loadStripe(
  "pk_test_51IhJfaKSu2UCBkjrmudHYyuSve1JRUdu2YnlbhaIRDGM4MM4sHkJUWrZXvficsncoRRozsKBe8QwyVaIJikKpEyp00qYSKyjSj"
);

const Payment = () => {
  const [loggedinUser, setLoggedinUser] = useContext(UserContext);
  const [orderedService, setOrderedService] = useState([]);
  const [total, setTotal] = useState(0);

  const email = sessionStorage.getItem("email");
  console.log(loggedinUser, orderedService);

  const paymentData = {
    ...orderedService,
    amount: total,
  };

  console.log(paymentData);

  useEffect(() => {
    getServices();
    //eslint-disable-next-line
  }, [email]);

  const getServices = () => {
    fetch(API_URL + "/getService?email=" + email)
      .then((response) => response.json())
      .then((data) => {
        setOrderedService(data);
        calculateTotal(data);
      })
      .catch((err) => console.log(err));
  };

  const handleRemoveService = (id) => {
    fetch(API_URL + `/deleteAppointment/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        getServices();
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  const calculateTotal = (userService) => {
    let price = 0;
    for (let i = 0; i < userService.length; i++) {
      let subTotal = parseFloat(userService[i].price);
      price = price + subTotal;
      setTotal(price);
    }
  };

  console.log(setLoggedinUser);
  return (
    <Container>
      <NavigationBar></NavigationBar>
      <Row className="mt-5 pt-5">
        <Col>
          <h4 className="all-text-color">
            Your Ordered Services:{orderedService.length}
          </h4>
          <table class="table">
            <thead class="thead-dark"></thead>

            <tbody>
              {orderedService.map((service) => (
                <tr>
                  <td>{service.service}</td>
                  <td>{service.price}$</td>
                  <td></td>
                  <td>
                    <button
                      onClick={() => handleRemoveService(service._id)}
                      className="btn btn-warning"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
        <Col>
          <h4 className="mb-5 all-text-color">Payment: {total}$</h4>
          <h5>This is an example of paymentMethod using Stripe:</h5>
          <ul className="border-bottom border-left">
            <li>Demo Card number is: 4242 4242 4242 4242</li>
            <li>Card data is: Any future date</li>
            <li>CVC: You can enter any 3 digit number</li>
            <li>Zip: Enter your zip: eg. 45128</li>
          </ul>
          <Elements stripe={stripePromise}>
            <CheckoutForm paymentData={paymentData}></CheckoutForm>
          </Elements>
        </Col>
      </Row>
    </Container>
  );
};

export default Payment;
