import React,{useState} from 'react';
import AppointmentsByDate from './AppointmentsByDate/AppointmentsByDate';
import Sidebar from './Sidebar/Sidebar';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';

const containerStyle = {
    height: '100%',
    right: 0, backgroundColor: '#F4FDFB'
}


const Dashboard = () => {
    const [selectedDate,setSelectedDate] = useState(new Date());
    const [appointmentDates,setAppointmentDates] = useState([]);
    const handleDateChange=date =>{
        setSelectedDate(date);
        const modDate = selectedDate.toDateString();
        fetch('http://localhost:5000/appointmentsByDate',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({modDate})
        })
        .then(response =>response.json())
        .then(data=>{
            setAppointmentDates(data);
            console.log(data)
        })
    }



    return (
        <section>
            <div style={ containerStyle } className="container-fluid row text-center">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>

                <div className="col-md-5 d-flex justify-content-center mt-5">
                    <div>
                    <h4 className="all-text-color">Click on dates to see appointments.</h4>
                    <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                    />
                    </div>
                   
               
                </div>

                <div className="col-md-5 mt-5">
                    <AppointmentsByDate appointments={appointmentDates}></AppointmentsByDate>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;