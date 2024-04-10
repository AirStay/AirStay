import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Accodbook from './Accodbook';
import Payment from './Payment';

const Booking = () => {
    const { id } = useParams();
    let navigate = useNavigate();

    const [step, setStep] = useState(1);
    const [bookingData, setBookingData] = useState(null);
    const [paymentData, setPaymentData] = useState(null);

    const handleBookingSubmit = (data) => {
        setBookingData(data);
        setStep(2); // Proceed to the payment step
        console.log(data)
    };

    const handlePaymentSubmit = async (paymentFormData) => {
        setPaymentData(paymentFormData);
        console.log(paymentFormData)
        
        // Combine bookingData and paymentData
        const combinedData = { ...bookingData, ...paymentFormData };
        console.log('Combined Data:', combinedData);

        // Submit combinedData to backend
        try {
            const token = localStorage.getItem('token');
            await axios.post("http://localhost:7420/api/bookaccomodation/bookaccomod", combinedData, {
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token,
                }
            });
            navigate("/paymentsuccess");
        } catch (error) {
            console.error("Error adding accommodation:", error);
        }
    };

    return (
        <div>
            {step === 1 && <Accodbook id={id} onSubmit={handleBookingSubmit} />}
            {step === 2 && <Payment onSubmit={handlePaymentSubmit} />}
        </div>
    );
};

export default Booking;
