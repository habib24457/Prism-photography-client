import React, { useState, useEffect } from "react";
import { Container, Carousel } from "react-bootstrap";
import ReviewCard from "../../ReviewCard/ReviewCard";
import ReactLoading from "react-loading";
import { API_URL } from "../../Constants/Constant";
import "./style.css";
import { Link } from "react-router-dom";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    getReviews();
  }, []);

  const getReviews = async () => {
    await fetch(API_URL + "/reviews")
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
        setDone(true);
      })
      .catch((err) => console.log(err));
  };

  console.log(reviews);
  return (
    <Container>
      <h1 className="all-text-color text-center">Customer Reviews</h1>
      {done ? (
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 text-center">
            <Carousel className="caro-des">
              {reviews.map((review) => (
                <Carousel.Item>
                  <div className="mt-5 pt-5">
                    <ReviewCard review={review}></ReviewCard>
                  </div>
                  <Link to="/dashboard">
                    <button className="brand-button mt-5">
                      Write a review
                    </button>
                  </Link>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div className="col-md-2"></div>
        </div>
      ) : (
        <div className="row justify-content-center mt-5 pt-5">
          <ReactLoading
            type={"spin"}
            color={"green"}
            height={100}
            width={100}
          />
        </div>
      )}

      {/* {!done ? (
        <div className="row justify-content-center mt-5 pt-5">
          <ReactLoading
            type={"spin"}
            color={"green"}
            height={100}
            width={100}
          />
        </div>
      ) : (
        <div>
          <Row className="text-center mt-5 pb-5">
            <Col></Col>
          </Row>

          <Row className="d-flex">
            {reviews.map((review) => (
              <ReviewCard review={review}></ReviewCard>
            ))}
          </Row>
        </div>
      )} */}
    </Container>
  );
};

export default Review;
