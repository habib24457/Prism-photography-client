import React, { useState, useEffect } from 'react';
import './ClientOrders.css';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import ClientOrderModal from '../ClientOrderModal/ClientOrderModal';
import { API_URL } from '../../Constants/Constant';

const ClientOrders = () => {
    const [paymentData, setPaymentData] = useState([]);
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const handleOrderRemove=(id)=>{
        fetch(API_URL+`/removeClientOrder/${id}`,{
            method: 'DELETE'
        })
        .then(response=> response.json())
        .then(result=>{
            console.log(result);
        })
        .catch((err)=>console.log(err));
    }


    useEffect(() => {
        fetch(API_URL+'/getPayment')
            .then(response => response.json())
            .then(data => setPaymentData(data))
            .catch((err)=>console.log(err));
    }, [])

    console.log(paymentData);

    return (
        <div className="row admin">
            <div className="col-md-3">
                <AdminSidebar></AdminSidebar>
            </div>
            <div className="col-md-9 ">
                <div className="row d-flex">
                    {
                        paymentData.map((singlePayment, key) => <div key={key} className="card text-white bg-success mt-3 mb-3 mr-3" style={{ width: '18rem', height: '20rem' }}>
                            <div className="card-header"> <span className="client-text-color">Client:</span> {singlePayment.paymentData[0]?.name}</div>
                            <div className="card-body">
                                <h5 className="card-title"> <span className="client-text-color">Ordered Service:</span>{singlePayment.paymentData[0]?.service}</h5>
                                <p className="card-text">
                                    <span className="client-text-color">Order date:</span> {singlePayment.paymentData[0]?.created}
                                </p>
                                <p className="card-text">
                                    <span className="client-text-color">Appointment date:</span> {singlePayment.paymentData[0]?.date}
                                </p>
                                <div className="d-flex justify-content-between">
                                    <button onClick={openModal} className="btn btn-warning">Payment details</button>
                                    <button onClick={()=>handleOrderRemove(singlePayment?._id)} className="btn btn-warning">Remove</button>
                                </div>
                                <ClientOrderModal modalIsOpen={modalIsOpen} closeModal={closeModal} cardData={singlePayment.cardData}></ClientOrderModal>
                            </div>

                        </div>)
                    }

                </div>

            </div>
        </div>
    );
};

export default ClientOrders;