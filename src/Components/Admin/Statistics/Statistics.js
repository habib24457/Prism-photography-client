import React, { useState, useEffect } from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { API_URL } from "../../Constants/Constant";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Statistics = () => {
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    getPaymentAmount();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Income graph",
      },
    },
  };

  const getPaymentAmount = async () => {
    await fetch(API_URL + "/appointments")
      .then((res) => res.json())
      .then((data) => {
        const newAmount = [
          {
            month: "",
            amount: "",
          },
        ];
        data.map((appoint) => {
          const createdDate = appoint?.created || appoint.date;
          const event = new Date(createdDate);
          const monthName = event.toLocaleString("en-us", { month: "short" });
          const priceAmount = parseInt(appoint.price);
          return newAmount.push({ month: monthName, amount: priceAmount });
        });
        setChartData(newAmount);
        //console.log(newAmount);
      });
  };

  console.log(chartData);

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Earning Amount",
        data: chartData.map((dataAmount) => dataAmount.amount),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="row admin">
      <div className="col-md-2">
        <AdminSidebar></AdminSidebar>
      </div>
      <div className="col-md-9">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default Statistics;
