import React, { useState, useEffect } from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import { API_URL } from "../../Constants/Constant";
import { Link } from "react-router-dom";
import { BarLoader } from "react-spinner-animated";

const CheckPayment = () => {
  const [payments, setPayments] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getReviews();
  }, []);

  const getReviews = () => {
    fetch(API_URL + "/getPayment")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPayments(data);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="row admin">
      <div className="col-md-2">
        <AdminSidebar></AdminSidebar>
      </div>

      {isLoaded ? (
        <>
          <div className="ml-3 mt-3 col-md-9 d-flex">
            <div className="row">
              {payments.map((payment) => (
                <div
                  class="card p-3 mr-3"
                  style={{ width: "28em", height: "22rem" }}
                >
                  <div class="card-body">
                    <h5 class="card-title">
                      Payment by: {payment.paymentData[0]?.name}
                    </h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                      Payment id: {payment._id}
                    </h6>
                    <p class="card-text">
                      Amount: {payment.paymentData[0].price}
                    </p>
                    <p class="card-text">
                      Service: {payment.paymentData[0].service}
                    </p>
                    <p class="card-text">
                      Phone no: {payment.paymentData[0].phone}
                    </p>
                    <p class="card-text">
                      Email: {payment.paymentData[0].email}
                    </p>
                    <p class="card-text">
                      Order date: {payment.paymentData[0].date}
                    </p>
                    <Link to={`/pdf/${payment._id}`}>
                      <button className="btn btn-secondary">
                        Create Invoice
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <BarLoader
          text={"Please wait..."}
          bgColor={"#ffffff"}
          center={false}
          width={"600px"}
          height={"400px"}
        />
      )}
    </div>
  );
};

export default CheckPayment;
