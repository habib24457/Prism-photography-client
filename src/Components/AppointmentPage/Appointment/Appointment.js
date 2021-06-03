import React,{useState} from 'react';
import Footer from '../../HomePage/Footer/Footer';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
//import AppointmentNav from '../AppointmentNav/AppointmentNav';
import BookAppointment from '../BookAppointment/BookAppointment';
import { Container} from 'react-bootstrap';
import NavigationBar from '../../HomePage/Home/NavigationBar/NavigationBar';

const Appointment = () => {
    const [selectedDate,setSelectedDate] = useState(new Date());
    const handleDateChange=date =>{
        setSelectedDate(date);
    }
    return ( 
        <Container>
           <NavigationBar></NavigationBar>
            <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
            <BookAppointment date={selectedDate}></BookAppointment>
            <Footer></Footer>
        </Container>
    ); 
};

export default Appointment;