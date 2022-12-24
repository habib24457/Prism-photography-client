import React from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";

const AppointmentHeader = ({ handleDateChange }) => {
  return (
    <div className="mt-5 pt-5">
      <h2>Select a date first:</h2>
      <Calendar onChange={handleDateChange} value={new Date()} />
      How does it work?
      <ul>
        <li>
          The user's appointment information will be stored in the Mongo DB.
        </li>
        <li>
          User can check what service they have booked by clicking on the
          'Basket'.
        </li>
      </ul>
    </div>
  );
};

export default AppointmentHeader;
