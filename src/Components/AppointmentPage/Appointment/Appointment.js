import React, { useState } from "react";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
//import AppointmentNav from '../AppointmentNav/AppointmentNav';
import BookAppointment from "../BookAppointment/BookAppointment";
import NavigationBar from "../../HomePage/Home/NavigationBar/NavigationBar";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDateClicked, setIsDateClicked] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsDateClicked(true);
  };
  return (
    <>
      <NavigationBar></NavigationBar>
      <div className="row mt-5">
        <div className="col-md-2"></div>

        <div className="col-md-4">
          <AppointmentHeader handleDateChange={handleDateChange} />
        </div>

        <div className="col-md-6">
          <BookAppointment date={selectedDate} isDateClicked={isDateClicked} />
        </div>
      </div>
    </>
  );
};

export default Appointment;
