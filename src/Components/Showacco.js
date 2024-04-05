import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function AccommodationCard({ accommodation }) {

  let navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/accomod/${accommodation._id}`);
  };

  return (
    <Card>
      <Card.Header>{accommodation.propertyName}</Card.Header>
      <Card.Body>
        <div>
          {accommodation.image && <img src='require(../${accommodation.image})' alt="Accommodation"  />}
          {console.log(accommodation.image)}
        </div>
        <Card.Text>
          <strong>Price:</strong> Rs. {accommodation.price}
        </Card.Text>
        <Button variant="primary" onClick={handleDetailsClick}>More Details</Button>
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
        const response = await axios.get('http://localhost:9050/api/accomod/useraccommodations', {
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
