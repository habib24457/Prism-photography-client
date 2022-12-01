import React, { useState, useEffect } from "react";
import "./CheckReviews.css";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import { API_URL } from "../../Constants/Constant";
import PieChart from "./PieChart/PieChart.js";
import { BarLoader } from "react-spinner-animated";

const CheckReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getReviews();
  }, []);

  const handleReviewRemove = (id) => {
    fetch(API_URL + `/deleteReview/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        getReviews();
      });
  };

  const getReviews = () => {
    fetch(API_URL + "/reviews")
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
        setIsLoaded(true);
      });
  };

  return (
    <div className="admin row">
      <div className="col-md-2">
        <AdminSidebar></AdminSidebar>
      </div>

      {isLoaded ? (
        <>
          <div className="col-md-4 mt-5">
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Review</th>
                  <th scope="col">Rating Stars</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((review) => (
                  <tr>
                    <td>{review?.review}</td>
                    <td>{review?.rating}</td>

                    <td>
                      <button
                        onClick={() => {
                          handleReviewRemove(review._id);
                        }}
                        className="btn btn-warning"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="col-md-4 mt-5">
            <h3>Ratings in Pie-chart</h3>
            <PieChart></PieChart>
          </div>
        </>
      ) : (
        <div className="col-md-10 pl-5">
          <BarLoader
            text={"Please wait..."}
            bgColor={"#ffffff"}
            center={false}
            width={"600px"}
            height={"400px"}
          />
        </div>
      )}
    </div>
  );
};

export default CheckReviews;
