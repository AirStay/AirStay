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
        const response = await axios.get(`http://localhost:7420/api/accomod/${id}`);
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
      <div style={{fontFamily:'serif'}}> Accommodation Details</div>
      {accommodation && (
         <div className='d-flex'>
          
         <div className="card mr-5"style={{borderRadius: '5px',width:'35rem',display:'flex',justifyContent:'center',margin:'auto',boxShadow: '0 0 40rem rgba(0.4, 0.6, 0.7, 0.5)'}}> {accommodation.image && <img src={require('../../uploads/' +(accommodation.image))}style={{border:'25px solid #021a40'}} alt="Accommodation" />}</div>
         <div className='p-5 mt-5 mb-3'style={{maxWidth:'50%', borderRadius: '15px', boxShadow: '0 0 40px rgba(0.2, 0.3, 0.4, 1)'}}>
          <p> <strong><div className='text'style={{fontFamily:'sans-serif',fontSize:'2rem'}}>{accommodation.propertyName}</div></strong></p>
          <p><strong>Address:</strong> {accommodation.address}, {accommodation.city}, {accommodation.state}, {accommodation.pincode}</p>
          <p><strong>Description:</strong> {accommodation.description}</p>
          <p><strong>Property Type:</strong> {accommodation.propertyType}</p>
          <p><strong>Room Type:</strong> {accommodation.roomType}</p>
          
          <p><strong>More Info:</strong> {accommodation.moreInfo}</p>
          <p><strong>Check-In Time:</strong> {accommodation.checkInTime}, <strong>Check-Out Time:</strong> {accommodation.checkOutTime}</p>
          <p><strong>Maximum Guests:</strong> {accommodation.maxGuests}</p>
          <p><strong>Price:</strong> Rs. {accommodation.price}</p>
        </div>
        </div>
      )}
      <Link to='/profile' className='btn btn-primary mb-4'>Go back</Link>
    </div>
  );
}

export default AccommodationDetails;
