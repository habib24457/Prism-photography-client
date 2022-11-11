import React, { useState, useContext } from "react";
import NavigationBar from "../HomePage/Home/NavigationBar/NavigationBar";
import Payment from "../Payment/Payment";
//import AppointmentsByDate from './AppointmentsByDate/AppointmentsByDate';
//import Sidebar from './Sidebar/Sidebar';
import "react-calendar/dist/Calendar.css";
//import Calendar from 'react-calendar';
import { UserContext } from "../../App";
import { Form, Button, Container } from "react-bootstrap";
import reviewPhoto from "../../images/reviewPhoto.jpg";
import { Notify } from "../Notify/Notify";
import { API_URL } from "../Constants/Constant";
import { FaStar } from "react-icons/fa";

const Dashboard = () => {
  //const [selectedDate, setSelectedDate] = useState(new Date());
  // const [appointmentDates, setAppointmentDates] = useState([]);
  const loggedinUser = useContext(UserContext);
  //const [adminMail,setAdminMail] = useState(null);
  console.log(loggedinUser.name);

  const [userReview, setUserReview] = useState({
    review: "",
    rating: 0,
  });
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  console.log(loggedinUser);

  const handleClick = (value) => {
    const newRating = { ...userReview };
    newRating.rating = value;
    setUserReview(newRating);
    setCurrentValue(value);
    console.log(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9",
  };

  const handleBlur = (e) => {
    const newReview = { ...userReview };
    newReview[e.target.name] = e.target.value;
    setUserReview(newReview);
  };
  console.log(userReview);

  const handleSubmit = () => {
    console.log(userReview);
    //userReview.user = loggedinUser.name;
    fetch(API_URL + "/addReview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userReview),
    })
      .then((response) => response.json())
      .then((success) => {
        if (success) {
          Notify(1);
        }
      })
      .catch((error) => {
        console.error(error);
      });

    return false;
  };

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
              <Form.Control
                onBlur={handleBlur}
                as="textarea"
                name="review"
                rows={3}
                placeholder="Share your opinion..."
              />
            </Form.Group>

            <Form.Group>
              <div>
                <div style={styles.container}>
                  <h2> Rate Your Experience </h2>
                  <div style={styles.stars}>
                    {stars.map((_, index) => {
                      return (
                        <FaStar
                          key={index}
                          size={24}
                          onClick={() => handleClick(index + 1)}
                          onMouseOver={() => handleMouseOver(index + 1)}
                          onMouseLeave={handleMouseLeave}
                          color={
                            (hoverValue || currentValue) > index
                              ? colors.orange
                              : colors.grey
                          }
                          style={{
                            marginRight: 10,
                            cursor: "pointer",
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </Form.Group>

            <Form.Group>
              <Button onClick={handleSubmit} variant="warning" type="button">
                Submit
              </Button>
            </Form.Group>
          </Form>
        </div>

        <div className="col-md-6 all-text-color text-center">
          <img src={reviewPhoto} style={{ width: "350px" }} alt="" />
        </div>
      </div>
    </Container>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300,
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  },
};

export default Dashboard;
