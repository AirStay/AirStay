import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
// import './Accodbook.css'

function Accodbook() {
  const { id } = useParams();
  const [accommodation, setAccommodation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [numGuests, setNumGuests] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform any booking-related actions, such as sending data to a server or displaying a confirmation message
    console.log('Booking submitted:', { fromDate, toDate, numGuests, fullName, phoneNumber });
    // Clear form fields after submission
    setFromDate('');
    setToDate('');
    setNumGuests('');
    setFullName('');
    setPhoneNumber('');
  };

  useEffect(() => {
    const fetchAccommodationDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/disaccomod/${id}`);
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

  return (
    <>
    <div>
      {accommodation && (
        
        <div>
          <div className="card border"style={{borderRadius: '5px',width:'30rem',display:'flex',justifyContent:'center',margin:'auto',boxShadow: '0 0 40rem rgba(0.4, 0.6, 0.7, 0.5)'}}> {accommodation.image && <img src={require('../../uploads/' +(accommodation.image))}alt="Accommodation" />}</div>
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
      )}
      <div className='container'>

      <div className='form'>    
  <div className='border' style={{ maxWidth: '500px', padding: '20px', borderRadius: '15px', boxShadow: '0 0 40px rgba(0.2, 0.3, 0.4, 1)' }}>
    <p style={{ marginBottom: '20px' }}>Price: per night for every hotel</p>
    <form onSubmit={handleSubmit} className='m-3'>
      <div className='d-flex'>
        <label>
          From Date:
          <input className='mr-2' type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} style={{ width: '100%', padding: '8px', marginTop: '5px', border: '1px solid #ccc', borderRadius: '4px' }} />
        </label>
        <label>
          To Date:
          <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} style={{ width: '100%', padding: '8px', marginTop: '5px', border: '1px solid #ccc', borderRadius: '4px' }} />
        </label>
      </div>

      <label>
        Number of Guests:<br />
        <input className='mr-2 w-100' type="number" value={numGuests} onChange={(e) => setNumGuests(e.target.value)} style={{ width: '100%', padding: '8px', marginTop: '5px', border: '1px solid #ccc', borderRadius: '4px' }} />
      </label>
      <br />
      <label>
        Full Name:<br />
        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} style={{ width: '100%', padding: '8px', marginTop: '5px', border: '1px solid #ccc', borderRadius: '4px' }} />
      </label>
      <br />
      <label>
        Phone Number:<br />
        <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} style={{ width: '100%', padding: '8px', marginTop: '5px', border: '1px solid #ccc', borderRadius: '4px' }} />
      </label>
      <br />
      <button className='btn-primary' style={{ padding: '10px 20px', border: 'none', borderRadius: '4px', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}><Link to="/payment" style={{color:'inherit',textDecoration:'none'}}>Book</Link></button>
    </form>
  </div>
</div>


{/* <Link to="/" className='btn btn-primary'>Back</Link> */}

<p className='mt-4'>What this place offer!</p>
<div className='mb-4'><strong>{Object.keys(accommodation.amenities).join(', ')}</strong></div> 
</div>
    </div>
    

    </>
  );
}

export default Accodbook;
