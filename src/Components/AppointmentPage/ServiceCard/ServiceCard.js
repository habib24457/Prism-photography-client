import React, { useState } from 'react';
import AppointmentModal from '../AppointmentModal/AppointmentModal';

const ServiceCard = ({serviceData, date}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
     
    return (
        <div className="col-md-4 mb-5">

            <div class="card" style={{ width: "20rem" }}>
                <div class="card-body">
                    <h5 class="card-title">Title:{serviceData.sName}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Price:{serviceData.price}$</h6>
                    <p class="card-text">Some quick example text.</p>
                    <button onClick={openModal} class="brand-button">Book Now</button>
                    <AppointmentModal appointService ={serviceData.sName} modalIsOpen={modalIsOpen} price={serviceData.price}  closeModal={closeModal} date={date}></AppointmentModal>
                </div>
            </div>

        </div>
    );
};

export default ServiceCard;