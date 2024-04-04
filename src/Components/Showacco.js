import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function AccommodationCard({ accommodation }) {
  return (
    <Card>
      <Card.Header>{accommodation.propertyName}</Card.Header>
      <Card.Body>
        <div>
          {accommodation.image && <img src='require(../${accommodation.image})' alt="Accommodation"  />}
          {console.log(accommodation.image)}
        </div>
        <Card.Text>
          <strong>Address:</strong> {accommodation.address}, {accommodation.city}, {accommodation.state}, {accommodation.pincode}
        </Card.Text>
        <Card.Text>
          <strong>Description:</strong> {accommodation.description}
        </Card.Text>
        <Card.Text>
          <strong>Property Type:</strong> {accommodation.propertyType}
        </Card.Text>
        <Card.Text>
          <strong>Room Type:</strong> {accommodation.roomType}
        </Card.Text>
        <Card.Text>
          <strong>Amenities:</strong> {Object.keys(accommodation.amenities).join(', ')}
        </Card.Text>
        <Card.Text>
          <strong>More Info:</strong> {accommodation.moreInfo}
        </Card.Text>
        <Card.Text>
          <strong>Check-In Time:</strong> {accommodation.checkInTime}, <strong>Check-Out Time:</strong> {accommodation.checkOutTime}
        </Card.Text>
        <Card.Text>
          <strong>Maximum Guests:</strong> {accommodation.maxGuests}
        </Card.Text>
        <Card.Text>
          <strong>Price:</strong> Rs. {accommodation.price}
        </Card.Text>
        <Button variant="primary">Book Now</Button>
      </Card.Body>
    </Card>
  );
}

function UserAccommodations() {
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    const fetchUserAccommodations = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/accomod/useraccommodations', {
          headers: {
            'Content-Type': 'multipart/form-data',
            'auth-token': token,
          },
        });
        setAccommodations(response.data);
      } catch (error) {
        console.error('Error fetching accommodations:', error);
      }
    };

    fetchUserAccommodations();
  }, []);

  return (
    <div>
      <h1>Your Accommodations</h1>
      {accommodations.map(accommodation => (
        <AccommodationCard key={accommodation._id} accommodation={accommodation} />
        
      ))}
      
    </div>
  );
}

export default UserAccommodations;
