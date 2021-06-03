import React, { useState,useEffect } from 'react';
//import NavigationBar from '../HomePage/Home/NavigationBar/NavigationBar';
import AdminSidebar from './AdminSidebar/AdminSidebar';
import Calendar from 'react-calendar';
import './Admin.css';

const Admin = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointmentDates, setAppointmentDates] = useState([]);
  const date = selectedDate.toDateString();

  useEffect(() => {
    fetch('http://localhost:5000/byDate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ date })
    })
      .then(response => response.json())
      .then(data => {
        setAppointmentDates(data);
      })
  },[date])

  const handleDateChange = dateChoose => {
    setSelectedDate(dateChoose);
  }


  const handleDone = (id)=>{
    console.log(id);
    fetch(`http://localhost:5000/removeClientAppointment/${id}`,{
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(result=>{
      console.log(result);
      window.location.reload();
    })
  }



  //console.log(selectedDate.toDateString())
  console.log(appointmentDates)


  return (
    <div className="admin row">
      <div className="col-md-3">
        <AdminSidebar></AdminSidebar>
      </div>

      <div className="col-md-3">
        <div className="col-md-5 d-flex justify-content-center mt-5">
          <div>
            <h4 className="all-text-color">Double click on dates to see appointments.</h4>
            <Calendar
              onChange={handleDateChange}
              value={new Date()}
            />
          </div>
        </div>
      </div>

      <div className="col-md-6 mt-5">
        <h4>Total <span className="all-text-color">{appointmentDates?.length}</span> appointments on <span className="all-text-color">{selectedDate.toDateString()}</span></h4>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Client Name</th>
              <th scope="col">Ordered service</th>
              <th scope="col">Appointment Date</th>
              <th scope="col">Payment status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
            {
              appointmentDates.map(appointment=><tr>
                <td>{appointment.name}</td>
                <td>{appointment.service}</td>
                <td>{appointment.date}</td>
                <td>Paid</td>
                <td>
                  <button onClick={()=>{handleDone(appointment._id)}} className="btn btn-warning">Done</button>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;