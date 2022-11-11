import react, { useState, useEffect } from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import { API_URL } from "../../Constants/Constant";

const CheckPayment = () => {
  const [payments, setPayments] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    getReviews();
  }, []);

  const getReviews = () => {
    fetch(API_URL + "/getPayment")
      .then((res) => res.json())
      .then((data) => setPayments(data))
      .catch((err) => console.log(err));
  };

  console.log(payments);

  return (
    <div className="row admin">
      <div className="col-md-2">
        <AdminSidebar></AdminSidebar>
      </div>

      <div className="ml-3 mt-3 col-md-9 d-flex">
        {isClicked ? <h1>This page is still under development!</h1> : <></>}
        {payments.map((payment) => (
          <div
            class="card p-3 mr-3"
            style={{ width: "25rem", height: "22rem" }}
          >
            <div class="card-body">
              <h5 class="card-title">
                Payment by: {payment.paymentData[0]?.name}
              </h5>
              <h6 class="card-subtitle mb-2 text-muted">
                Payment id: {payment.paymentData[0]._id}
              </h6>
              <p class="card-text">Amount: {payment.paymentData[0].price}</p>
              <p class="card-text">Service: {payment.paymentData[0].service}</p>
              <p class="card-text">Phone no: {payment.paymentData[0].phone}</p>
              <p class="card-text">Email: {payment.paymentData[0].email}</p>
              <p class="card-text">Order date: {payment.paymentData[0].date}</p>
              <button
                onClick={() => setIsClicked(!isClicked)}
                className="btn btn-secondary"
              >
                Download Invoice
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckPayment;
