import React, { useState,useEffect } from 'react';
//import NavigationBar from '../HomePage/Home/NavigationBar/NavigationBar';
import AdminSidebar from './AdminSidebar/AdminSidebar';
import Calendar from 'react-calendar';
import './Admin.css';
import { API_URL } from '../Constants/Constant';
import EditAppointmentModal from './EditAdminModal/EditAdminModal';

const Admin = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  const [modalIsOpen, setIsModalOpen] = useState(false);
  const [closeModal,setCloseModal] = useState(false);
  const [inputData,setInputData] = useState({});
  const date = selectedDate.toDateString();
  const [isEdited,setIsEdited] = useState(false);

  console.log(closeModal);

  // useEffect(() => {
  //   fetch(API_URL+'/byDate', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ date })
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       setAppointmentDates(data);
  //     })
  //     .catch(err=>console.log(err))
  // },[date])

  useEffect(()=>{
    getAppointments();
  },[isEdited])

  const getAppointments =()=>{
      fetch(API_URL+'/appointments')
      .then(res=>res.json())
      .then(data=>setAppointments(data))
      .catch(err=>console.log(err));
  };

  const handleDateChange = dateChoose => {
    setSelectedDate(dateChoose);
  }


  const handleDelete = (id)=>{
    console.log(id);
    fetch(API_URL+`/deleteAppointment/${id}`,{
      method: 'DELETE'
    })
    .then(response => response.json())
    .then((result) =>{
      getAppointments();
      console.log(result);
    }).catch(err=>console.log(err))

  }

  const handleEdit =(id)=>{
    const selectedRow = appointments.filter((appointment)=>appointment._id === id);
    setInputData(selectedRow[0]);
    //console.log(selectedRow);
    setIsModalOpen(true);
  };


  //console.log(selectedDate.toDateString())
  //console.log(appointmentDates)


  return (
    <div className="admin row">
      <div className="col-md-2">
        <AdminSidebar></AdminSidebar>
      </div>

      <EditAppointmentModal setIsEdited={setIsEdited} inputData ={inputData} setInputData={setInputData} modalIsOpen={modalIsOpen}  closeModal={closeModal} setIsModalOpen={setIsModalOpen}></EditAppointmentModal>

      <div className="col-md-10 mt-5">
        <h4>Total <span className="all-text-color">{appointments?.length}</span> upcoming appointments</h4>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Client Name</th>
              <th scope="col">Ordered service</th>
              <th scope="col">Appointment Date</th>
              <th scope="col">Payment status</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
            {
              appointments.map(appointment=><tr>
                <td>{appointment.name}</td>
                <td>{appointment.service}</td>
                <td>{appointment.date}</td>
                <td>{appointment.price}</td>
                <td>{appointment.email}</td>
                <td>{appointment.phone}</td>
                <td>
                  <button onClick={()=>{handleEdit(appointment._id)}} className="btn btn-primary admin-button">Edit</button>
                  <button onClick={()=>{handleDelete(appointment._id)}} className="btn btn-warning admin-button">Delete</button>

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