import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Button } from 'react-bootstrap';
import {Notify} from '../Notify/Notify';
import { API_URL } from '../Constants/Constant';


const CheckoutForm = (props) => {
    const stripe = useStripe();
    const elements = useElements();
    
 
    const savingPaymentData = (userPaymentData)=>{
        console.log(userPaymentData);
        fetch(API_URL+'/addPayment',{
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userPaymentData)
        })
        .then(response => response.json())
        .then(data =>{
            if(data){
                Notify(2);
            }else{
               Notify(3);
            }  
        })
    }

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            const isPaid = true;
            const payment = {...props};
            payment.status = isPaid;
            payment.cardData = {...paymentMethod};
            savingPaymentData(payment);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <Button className="mt-5" variant="warning" type="submit" disabled={!stripe}>
               Finish Payment
            </Button>
            
        </form>
    );
};

export default CheckoutForm;