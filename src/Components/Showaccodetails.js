import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function AccommodationDetails() {
  const { id } = useParams();
  const [accommodation, setAccommodation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAccommodationDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/accomod/${id}`);
        setAccommodation(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching accommodation details:', error);
      }
    };

    fetchAccommodationDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const replaceBackslashes = (path) => {
    return path.replace(/\\/g, '/');
  };
  

  return (
    <div>
      <h2>Accommodation Details</h2>
      {accommodation && (
        <div>
          {accommodation.image && <img src={require('../' + replaceBackslashes(accommodation.image))} alt="Accommodation" />}
          <p><strong>Name:</strong> {accommodation.propertyName}</p>
          <p><strong>Address:</strong> {accommodation.address}, {accommodation.city}, {accommodation.state}, {accommodation.pincode}</p>
          <p><strong>Description:</strong> {accommodation.description}</p>
          <p><strong>Property Type:</strong> {accommodation.propertyType}</p>
          <p><strong>Room Type:</strong> {accommodation.roomType}</p>
          <p><strong>Amenities:</strong> {Object.keys(accommodation.amenities).join(', ')}</p>
          <p><strong>More Info:</strong> {accommodation.moreInfo}</p>
          <p><strong>Check-In Time:</strong> {accommodation.checkInTime}, <strong>Check-Out Time:</strong> {accommodation.checkOutTime}</p>
          <p><strong>Maximum Guests:</strong> {accommodation.maxGuests}</p>
          <p><strong>Price:</strong> Rs. {accommodation.price}</p>
        </div>
      )}
      <Link to='/profile' className='btn btn-primary'>back</Link>
    </div>
  );
}

export default AccommodationDetails;
