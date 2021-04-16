import React from 'react';

const ServiceDetail = ({ service }) => {
    return (
        <div className="col-md-4 text-center text-secondary">
             
            <img style={{ width: '100px', height: '100px' }} src={service.logo} alt="" />
            <h4 className="mt-2">{service.title}</h4>
            <p>Price: {service.price}$</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Distinctio sint optio quasi, neque nihil magnam.</p>

        </div>
    );
};

export default ServiceDetail;