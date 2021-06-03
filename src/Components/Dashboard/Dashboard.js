import React, { useState, useContext } from 'react';
import NavigationBar from '../HomePage/Home/NavigationBar/NavigationBar';
import Payment from '../Payment/Payment';
//import AppointmentsByDate from './AppointmentsByDate/AppointmentsByDate';
//import Sidebar from './Sidebar/Sidebar';
import 'react-calendar/dist/Calendar.css';
//import Calendar from 'react-calendar';
import { UserContext } from '../../App';
import {Form, Button, Container } from 'react-bootstrap';
import reviewPhoto from '../../images/reviewPhoto.jpg';
import {Notify} from '../Notify/Notify';




const Dashboard = () => {
    //const [selectedDate, setSelectedDate] = useState(new Date());
    // const [appointmentDates, setAppointmentDates] = useState([]);
    const [loggedinUser, setLoggedinUser] = useContext(UserContext);
    //const [adminMail,setAdminMail] = useState(null);
    console.log(loggedinUser.name);

    const [userReview, setUserReview] = useState({
        review: '',
        user: ''
    });

    const handleBlur = e => {
        const newReview = { ...userReview };
        newReview[e.target.name] = e.target.value;
        setUserReview(newReview);
    }
    console.log(setLoggedinUser);

    const handleSubmit = () => {
        console.log(userReview);
        userReview.user = loggedinUser.name;
        fetch('https://infinite-castle-13224.herokuapp.com/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userReview)
        })
            .then(response => response.json())
            .then(success => {
                if (success) {
                    Notify(1);
                }
            })
            .catch(error => {
                console.error(error)
            })

        return false;
    }

    /** 
    const handleDateChange = date => {
        setSelectedDate(date);
        const modDate = selectedDate.toDateString();
        fetch('https://infinite-castle-13224.herokuapp.com/appointmentsByDate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ modDate, email: loggedinUser.email })
        })
        .then(response => response.json())
        .then(data => {
        setAppointmentDates(data);
                // for(var i=0;i<=data.length;i++) {
                //     let mail = data[i]?.email;
                //     console.log(mail);
                //     if(mail === loggedinUser.email){
                //         console.log("Admin");
                //     }else{
                //         console.log("User")
                //     }

                // }
        })
    }
*/


    return (
        <Container>
            <NavigationBar></NavigationBar>
            <section>
                <Payment></Payment>
            </section>

            <div className="row mt-5 border-top">

                <div className="col-md-6 ">
                <h1 className="all-text-color text-center">Write a review</h1>
                    <Form className="admin-form-design shadow p-5 border-top">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Write something...</Form.Label>
                            <Form.Control onBlur={handleBlur} as="textarea" name="review" rows={3} placeholder="Share your opinion..." />
                        </Form.Group>

                        <Form.Group>
                            <Button onClick={handleSubmit} variant="warning" type="button">
                                Submit
                         </Button>
                        </Form.Group>
                    </Form>
                </div>

                <div className="col-md-6 all-text-color text-center">
                <img src={reviewPhoto} style={{ width:'350px'}} alt=""/>
                </div>
            </div>

        </Container>
    );
};

export default Dashboard;