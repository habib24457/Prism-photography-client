import React from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import studioBack from '../../../images/photoBack.jpg';




const AppointmentHeader = ({ handleDateChange }) => {
 

    return (
        <div className="row ">
            <div className="col-md-6  mt-5 pt-5">
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
            </div>

            <div className="col-md-6">
                <img style={{ height: '450px', width: '650px' }} src={studioBack} alt="" />
            </div>

           
        </div>
    );
};

export default AppointmentHeader;