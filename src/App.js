import "./App.css";
import Home from "./Components/HomePage/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Appointment from "./Components/AppointmentPage/Appointment/Appointment";
import Dashboard from "./Components/Dashboard/Dashboard";
//import UserDashboard from './Components/UserDashboard/UserDashboard';
import Login from "./Components/Login/Login";
import React, { createContext, useState } from "react";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AddAdmin from "./Components/AddAdmin/AddAdmin";
import Payment from "./Components/Payment/Payment";
import Contact from "./Components/Contact/Contact";
import Admin from "./Components/Admin/Admin";
import CheckReviews from "./Components/Admin/CheckReviews/CheckReviews";
import ClientOrders from "./Components/Admin/ClientOrders/ClientOrders";
import CheckAdmin from "./Components/Admin/CheckAdmin/CheckAdmin";
import Statistics from "./Components/Admin/Statistics/Statistics";
import CheckPayment from "./Components/Admin/CheckPayments/CheckPayment";
import PdfGenerator from "./Components/Admin/CheckPayments/PdfGenerator/PdfGenerator";
import SearchPhoto from "./Components/SearchPhoto/SearchPhoto";
// import SharePhotos from "./Components/UserMenu/SharePhotos/SharePhotos";
// import BuyAndSell from "./Components/UserMenu/BuyAndSell/BuyAndSell";
// import Profile from "./Components/UserMenu/CheckProfile/Profile";
import Draw from "./Components/Draw/Draw";
import ImageEditor from "./Components/ImageEditor/ImageEditor";

export const UserContext = createContext("");

function App() {
  const [loggedinUser, setLoggedinUser] = useState({});
  return (
    <UserContext.Provider value={[loggedinUser, setLoggedinUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/payment">
            <Payment></Payment>
          </Route>
          <Route path="/addAdmin">
            <AddAdmin></AddAdmin>
          </Route>
          <Route path="/checkReview">
            <CheckReviews></CheckReviews>
          </Route>
          <Route path="/clientOrders">
            <ClientOrders></ClientOrders>
          </Route>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route path="/checkAdmin">
            <CheckAdmin></CheckAdmin>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/appoint">
            <Appointment></Appointment>
          </Route>
          <Route path="/statistics">
            <Statistics></Statistics>
          </Route>

          <Route path="/pdf/:id">
            <PdfGenerator />
          </Route>

          <Route path="/checkPayment">
            <CheckPayment></CheckPayment>
          </Route>

          <Route path="/searchPhoto">
            <SearchPhoto></SearchPhoto>
          </Route>

          <Route path="/drawPic">
            <Draw></Draw>
          </Route>

          <Route path="/image-editor">
            <ImageEditor />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
