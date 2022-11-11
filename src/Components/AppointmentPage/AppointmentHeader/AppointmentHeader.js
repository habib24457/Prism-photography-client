import React from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";

const AppointmentHeader = ({ handleDateChange }) => {
  return (
    <div className="mt-5 pt-5">
      <h2>Select a date first:</h2>
      <Calendar onChange={handleDateChange} value={new Date()} />
    </div>
  );
};

export default AppointmentHeader;
