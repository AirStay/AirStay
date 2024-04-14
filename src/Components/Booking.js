import React, { useState, useEffect } from 'react';
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
    const [userEmail, setUserEmail] = useState(null);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const fetchUserEmail = async () => {
            try {
                const token = localStorage.getItem('token');
                console.log('token:', token)
                const response = await fetch("http://localhost:7420/api/auth/getuser", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'auth-token': token,
                    }
                });
                const userData = await response.json();
                const email = userData.email; 
                setUserEmail(email);
                const id= userData._id;
                setUserId(id);

            } catch (error) {
                console.error("Error fetching user email:", error);
            }
        };

        if (step === 1) {
            fetchUserEmail();
        }
    }, [step]);

    const handleBookingSubmit = (data) => {
        setBookingData(data);
        setStep(2); 
        console.log(data)
    };

    const handlePaymentSubmit = async (paymentFormData) => {
        setPaymentData(paymentFormData);
        console.log(paymentFormData)
        
        
        const combinedData = { ...bookingData, ...paymentFormData, userEmail, userId, accoId: id };
        console.log('Combined Data:', combinedData);

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
