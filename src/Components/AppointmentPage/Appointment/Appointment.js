import React, { useState } from "react";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
//import AppointmentNav from '../AppointmentNav/AppointmentNav';
import BookAppointment from "../BookAppointment/BookAppointment";
import { Container } from "react-bootstrap";
import NavigationBar from "../../HomePage/Home/NavigationBar/NavigationBar";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDateClicked, setIsDateClicked] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsDateClicked(true);
  };
  return (
    <Container>
      <NavigationBar></NavigationBar>
      <div className="row">
        <div className="col-md-4">
          <AppointmentHeader
            handleDateChange={handleDateChange}
          ></AppointmentHeader>
        </div>
        <div className="col-md-8">
          <BookAppointment
            date={selectedDate}
            isDateClicked={isDateClicked}
          ></BookAppointment>
        </div>
      </div>
    </Container>
  );
};

export default Appointment;
