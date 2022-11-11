import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import { BarLoader } from "react-spinner-animated";
import "react-spinner-animated/dist/index.css";

const availableServices = [
  {
    sName: "Wedding Photography",
    time: "8am - 8pm",
    price: "500",
  },
  {
    sName: "Studio Photography",
    time: "8am - 8pm",
    price: "100",
  },
  {
    sName: "Event Photography",
    time: "8am - 8pm",
    price: "550",
  },
  {
    sName: "Videography",
    time: "8am - 8pm",
    price: "1500",
  },

  {
    sName: "Print out High Def. Photos",
    time: "8am - 8pm",
    price: "50",
  },
  {
    sName: "Photography Training",
    time: "8am - 8pm",
    price: "500",
  },
];

const BookAppointment = ({ date, isDateClicked }) => {
  const userSelectedDate = date.toDateString();
  console.log(userSelectedDate);
  return (
    <>
      {isDateClicked ? (
        <section>
          <div className="mt-5 pt-5 pb-5 d-flex justify-content-center">
            <h1>Available Appointments on {userSelectedDate}</h1>
          </div>

          <div className="row d-flex justify-content-center">
            {availableServices.map((p) => (
              <ServiceCard
                serviceData={p}
                date={userSelectedDate}
              ></ServiceCard>
            ))}
          </div>
        </section>
      ) : (
        <div className="mt-5 pt-5 pb-5 d-flex justify-content-center">
          <BarLoader
            text={"Select a date..."}
            bgColor={"#388369"}
            center={false}
            width={"400px"}
            height={"400px"}
          />
        </div>
      )}
    </>
  );
};

export default BookAppointment;
