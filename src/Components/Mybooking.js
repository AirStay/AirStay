import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
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

  // Function to format date as dd/mm/yyyy
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="col-md-4 mb-4">
      {accommodation && booking && (
        <Card style={{ height: '100%' }}>
          <Card.Header><strong>{accommodation.propertyName}</strong></Card.Header>
          <Card.Body style={{ height: '100%' }}>
            <div style={{ height: '70%' }}>{accommodation.image && <img src={require(`../../uploads/${accommodation.image}`)} alt="Accommodation"style={{ width: '100%', objectFit: 'contain' }}  height={"250px"} />}</div>
            <CardText className='mt-2'><strong>Rs. </strong>{accommodation.price}/night</CardText>
            <CardText>{formatDate(booking.fdate)} <strong>{'-->'}</strong> {formatDate(booking.tdate)}</CardText>
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
        console.error('Error fetching bookings:', error);
        setError('Error fetching bookings. Please try again later.');
      }
    };
    
    fetchMyBooking();
  }, []);

  return (
    <div>
      <div className='mb-5' style={{ fontFamily: 'Times New Roman', fontSize: '32px', fontWeight: 'bold', display: 'flex', justifyContent: 'center', margin: 'auto' }}>
        {bookings.length > 0 ? 'Your Bookings' : 'No bookings available'}
      </div>
      {bookings.length > 0 && (
        <div className="row">
          {bookings.map(booking => (
            <BookingCard key={booking._id} booking={booking} />
          ))}
        </div>
      )}
    </div>
  );
}

export default MyBooking;
