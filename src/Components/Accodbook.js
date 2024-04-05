
// const Accodbook = () => {
  // const [fromDate, setFromDate] = useState('');
  // const [toDate, setToDate] = useState('');
  // const [numGuests, setNumGuests] = useState('');
  // const [fullName, setFullName] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Here you can perform any booking-related actions, such as sending data to a server or displaying a confirmation message
  //   console.log('Booking submitted:', { fromDate, toDate, numGuests, fullName, phoneNumber });
  //   // Clear form fields after submission
  //   setFromDate('');
  //   setToDate('');
  //   setNumGuests('');
  //   setFullName('');
  //   setPhoneNumber('');
  // };

//   return (
    // <div className='container'>
      
    //   <p>Accomodation Name</p>
        
    // <p>Hotel address</p>
    // <p> images </p>
    // <p>Description</p>
    // <div className='d-flex'>
    
  
    
    // <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint quibusdam modi velit quisquam commodi sequi maxime harum incidunt! Alias iusto totam, optio natus reprehenderit tenetur eos quae aspernatur commodi temporibus nemo ea nobis facilis amet?
    // </p>
    
    
    // <div className='border size-sm mx-auto p-3' style={{ maxWidth: '500px' }}>
    //   Price: per night for every hotel
    //   <form onSubmit={handleSubmit} className='m-3'>
    //     <div className='d-flex'>
    //       <label>
    //         From Date:
    //         <input className='mr-2' type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
    //       </label>
    //       <label>
    //         To Date:
    //         <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
    //       </label>
    //     </div>

    //     <label>
    //       Number of Guests:<br />
    //       <input className='mr-2 w-100' type="number" value={numGuests} onChange={(e) => setNumGuests(e.target.value)} />
    //     </label>
    //     <br />
    //     <label>
    //       Full Name:<br />
    //       <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
    //     </label>
    //     <br />
    //     <label>
    //       Phone Number:<br />
    //       <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
    //     </label>
    //     <br />
    //     <button className='btn-primary'><Link to="/payment" style={{color:'inherit',textDecoration:'none'}}>Book</Link></button>
    //   </form>
    // </div>
    // </div>
 
    // <p>What this place offer!</p>
    
    // </div>
//   );
// };

// export default Accodbook;

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

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
    </div>
    <div className='container'>

    <div className='d-flex'>    
    <div className='border size-sm mx-auto p-3' style={{ maxWidth: '500px' }}>
      Price: per night for every hotel
      <form onSubmit={handleSubmit} className='m-3'>
        <div className='d-flex'>
          <label>
            From Date:
            <input className='mr-2' type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
          </label>
          <label>
            To Date:
            <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
          </label>
        </div>

        <label>
          Number of Guests:<br />
          <input className='mr-2 w-100' type="number" value={numGuests} onChange={(e) => setNumGuests(e.target.value)} />
        </label>
        <br />
        <label>
          Full Name:<br />
          <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        </label>
        <br />
        <label>
          Phone Number:<br />
          <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </label>
        <br />
        <button className='btn-primary'><Link to="/payment" style={{color:'inherit',textDecoration:'none'}}>Book</Link></button>
      </form>
    </div>
    </div>

    <Link to="/" className='btn btn-primary'>Back</Link>
 
    <p>What this place offer!</p>
    
    </div>

    </>
  );
}

export default Accodbook;
