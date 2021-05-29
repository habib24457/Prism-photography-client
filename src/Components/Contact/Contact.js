import React from 'react';
import NavigationBar from '../HomePage/Home/NavigationBar/NavigationBar';
import Footer from '../HomePage/Footer/Footer';
import './Contact.css';

const Contact = () => {
    return (
        <>
            <NavigationBar></NavigationBar>
            <div className="row d-flex justify-content-center mt-5 pt-5">
                <div className="col-md-6 text-center">

                </div>
            </div>

            <div className='container-fluid' style={{position:'fixed',bottom:'0'}}>
                <Footer></Footer>
            </div>
        </>
    );
};

export default Contact;