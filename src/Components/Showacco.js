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

  
  const replaceBackslashes = (path) => {
    return path.replace(/\\/g, '/');
  };

  return (
    <Card>
      <Card.Header>{accommodation.propertyName}</Card.Header>
      <Card.Body>
        <div>
        {accommodation.image && <img src={require('../' + replaceBackslashes(accommodation.image))} alt="Accommodation" />}
    
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
  const [error, setError] = useState(null);

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
        setError('Error fetching accommodations. Please try again later.');
      }
    };

    fetchUserAccommodations();
  }, []);

  return (
    <div>
      <h1>Your Accommodations</h1>
      {error && <div>{error}</div>}
      {accommodations.map(accommodation => (
        <AccommodationCard key={accommodation._id} accommodation={accommodation} />
      ))}
    </div>
  );
}

export default UserAccommodations;
