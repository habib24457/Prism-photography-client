import './App.css';
import Home from './Components/HomePage/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Appointment from './Components/AppointmentPage/Appointment/Appointment';
import Dashboard from './Components/Dashboard/Dashboard';
//import UserDashboard from './Components/UserDashboard/UserDashboard';
import Login from './Components/Login/Login';
import React, { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AddAdmin from './Components/AddAdmin/AddAdmin';
import Payment from './Components/Payment/Payment';
import Contact from './Components/Contact/Contact';
import Admin from './Components/Admin/Admin';

export const UserContext = createContext('');

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
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/appoint">
            <Appointment></Appointment>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
