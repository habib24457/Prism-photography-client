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
import UserDashboard from './Components/UserDashboard/UserDashboard';
import Login from './Components/Login/Login';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>

        <Route path="/dashboard">
          <Dashboard></Dashboard>
        </Route>

        <Route path="/userDashboard">
          <UserDashboard></UserDashboard>
        </Route>

        <Route path="/login">
          <Login></Login>
        </Route>

        <Route path="/appoint">
         <Appointment></Appointment>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
