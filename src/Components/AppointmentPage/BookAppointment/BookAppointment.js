import React from 'react';
//import { Card, Button } from 'react-bootstrap';
import ServiceCard from '../ServiceCard/ServiceCard';

const availableServices = [
    {
        sName: 'Wedding Photography',
        time: '8am - 8pm',
        price: '500'
    },
    {
        sName: 'Studio Photography',
        time: '8am - 8pm',
        price: '100'
    },
    {
        sName: 'Event Photography',
        time: '8am - 8pm',
        price: '550'
    },
    {
        sName: 'Videography',
        time: '8am - 8pm',
        price: '1500'
    },

    {
        sName: 'Print out High Def. Photos',
        time: '8am - 8pm',
        price: '50'
    },
    {
        sName: 'Photography Training',
        time: '8am - 8pm',
        price: '500'
    }
]


const BookAppointment = ({ date }) => {
    const userSelectedDate = date.toDateString();
    return (
        <section>
            <div className="row mt-5 pt-5 pb-5 d-flex justify-content-center">
                <h1>Available Appointments on {userSelectedDate}</h1>
            </div>

            <div className="row d-flex justify-content-center">
                {
                    availableServices.map(p => <ServiceCard serviceData={p} date={userSelectedDate}></ServiceCard>)
                }
            </div>
        </section>
    );
};

export default BookAppointment;