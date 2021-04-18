import React, { useState, useContext } from 'react';
import AppointmentsByDate from './AppointmentsByDate/AppointmentsByDate';
import Sidebar from './Sidebar/Sidebar';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { UserContext } from '../../App';
import { Row, Col, Form, Button } from 'react-bootstrap';
const containerStyle = {
    height: '100%',
    right: 0, backgroundColor: '#F4FDFB'
}



const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointmentDates, setAppointmentDates] = useState([]);
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
                    alert('Review added');
                }
            })
            .catch(error => {
                console.error(error)
            })

        return false;
    }

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



    return (
        <section>
            <div style={containerStyle} className="container-fluid row text-center">
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

            <Row className="d-flex justify-content-center mt-5 pt-5 pb-5">
                <Col md={{ span: 6, offset: 3 }}>
                    <h1 className="all-text-color text-center">Write a review</h1>
                    <Form className="admin-form-design shadow p-5">
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
                </Col>
            </Row>

        </section>
    );
};

export default Dashboard;