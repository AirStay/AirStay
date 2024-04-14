import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Booking from './Booking';
import { CardText } from 'react-bootstrap';

function BookingCard({ booking }) {
  let navigate = useNavigate();
  const [accommodation, setAccommodation] = useState(null);
 
  useEffect(() => {
    const fetchAccommodation = async () => {
      try {
        const response = await axios.get(`http://localhost:7420/api/disaccomod/${booking.accoId}`);
        setAccommodation(response.data);
      } catch (error) {
        console.error('Error fetching accommodation:', error);
      }
    };
    fetchAccommodation();
  }, [booking.accoId]);

  return (
    <div className="col-md-6 mb-4">
      {accommodation&& booking && (
        <Card style={{ height: '100%' }}>
          <Card.Header>{accommodation.propertyName}</Card.Header>
          <Card.Body style={{ height: '100%' }}>
          {accommodation.image && <img src={require(`../../uploads/${accommodation.image}`)} alt="Accommodation"height={"250px"} />}
          <CardText>{booking.name}</CardText>
          <CardText>{booking.tdate}</CardText>
          <CardText>{booking.fdate}</CardText>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

function MyBooking() {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMyBooking = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:7420/api/bookaccomodation/userbookings', {
          headers: {
            'Content-Type': 'application/json',
            'auth-token': token,
          },
        });
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookins:', error);
        setError('Error fetching bookings. Please try again later.');
      }
    };
    
    fetchMyBooking();
  }, []);

  return (
    <div>
      <h1 className='mb-5'>Your Bookings</h1>
      <div className="row">
        {bookings.map(booking => (
          <BookingCard key={booking._id} booking={booking} />
        ))}
      </div>
    </div>
  );
}

export default MyBooking;
