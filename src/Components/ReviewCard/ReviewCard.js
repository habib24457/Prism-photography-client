import React from "react";
import "./ReviewCard.css";
import { FaStar } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  //console.log(review);
  const stars = Array(5).fill(0);
  const starValue = review.rating;

  const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9",
  };

  return (
    <div className="card-design text-center">
      <div className="text-des">Review:{review.review}</div>
      <div className="stars">
        <div style={styles.stars}>
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={24}
                color={starValue > index ? colors.orange : colors.grey}
                style={{
                  marginRight: 10,
                  cursor: "pointer",
                }}
              />
            );
          })}
        </div>
      </div>
      <div></div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 200,
    width: 500,
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  },
};

export default ReviewCard;
