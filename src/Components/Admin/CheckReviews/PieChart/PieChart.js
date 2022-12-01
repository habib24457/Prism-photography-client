import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { API_URL } from "../../../Constants/Constant";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    getReviewStars();
  }, []);

  const getReviewStars = () => {
    fetch(API_URL + "/reviews")
      .then((response) => response.json())
      .then((data) => {
        const newArr = [];
        data.map((stars) => {
          return newArr.push(stars.rating);
        });
        const count = {};
        newArr.forEach((element) => {
          count[element] = (count[element] || 0) + 1;
        });
        let chartData = Object.values(count);
        setChartData(chartData);
        //setStarRating(newArr);
      });
  };

  // const countStars = () => {
  //   const count = {};
  //   starRating.forEach((element) => {
  //     count[element] = (count[element] || 0) + 1;
  //   });
  //   let chartData = Object.values(count);
  //   setChartData(chartData);
  // };

  console.log(chartData);

  const data = {
    labels: ["1 Star", "2 Star", "3 Star", "4 Star", "5 Star"],
    datasets: [
      {
        label: "# of Votes",
        data: chartData || [2, 4, 2, 1, 6],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} />;
};

export default PieChart;
