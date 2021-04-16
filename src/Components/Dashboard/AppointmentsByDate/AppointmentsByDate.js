import React from 'react';
import {Table} from 'react-bootstrap';


const AppointmentsByDate = ({ appointments }) => {
    console.log(appointments);
    return (
        <div>
            <h4 className="all-text-color">Appointments by: {appointments.length} people.</h4>

            
                 <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Service</th>
                                <th>Phone</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                appointments.map(appoint => 
                                <tr>
                                    <td>{appoint.name}</td>
                                    <td>{appoint.service}</td>
                                    <td>{appoint.phone}</td>
                                    <td></td>
                                </tr>)
                            }
                           
                        </tbody>
                    </Table>
                </div>
            
        </div>
    );
};

export default AppointmentsByDate;