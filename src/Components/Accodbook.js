import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './Accodbook.css'

function Accodbook({id, onSubmit}) {
  const [accommodation, setAccommodation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    fdate: '',
    tdate: '',
    guestnumber: '',
    name: '',
    phno: ''
});

const handleInputChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    const { fdate, tdate, guestnumber, name, phno} = formData;

    const formDataToSend = new FormData();
    formDataToSend.append('fdate',fdate);
    formDataToSend.append('tdate', tdate);
    formDataToSend.append('guestnumber', guestnumber);
    formDataToSend.append('name', name);
    formDataToSend.append('phno', phno);

    // try {
    //   console.log('Request Body:', formData);
    //   const response = await axios.post("http://localhost:7420/api/bookaccomodation/bookaccomod", formDataToSend, {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'auth-token': token,
    //     }
    //   });

    //   console.log(response.data);
    //   navigate("/");
    // } catch (error) {
    //   console.error("Error adding accommodation:", error);
      
    // }
    onSubmit(formData);
  };


  useEffect(() => {
    const fetchAccommodationDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:7420/api/disaccomod/${id}`);
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
          <div className="card "style={{borderRadius: '5px',width:'35rem',display:'flex',justifyContent:'center',margin:'auto',boxShadow: '0 0 40rem rgba(0.4, 0.6, 0.7, 0.5)'}}> {accommodation.image && <img src={require('../../uploads/' +(accommodation.image))}style={{border:'25px solid #021a40'}} alt="Accommodation" />}</div>
         
         <div className='d-flex'style={{justifyContent:'space-between',marginTop:'10vh'}} >
          <div className='p-5'style={{maxWidth:'50%', borderRadius: '15px', boxShadow: '0 0 40px rgba(0.2, 0.3, 0.4, 1)'}}>
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
        
        <div className='form'style={{justifyContent:'center',display:'flex',flexDirection:'column'}}>    
  <div className='border' style={{ maxWidth: '500px', padding: '20px', borderRadius: '15px', boxShadow: '0 0 40px rgba(0.2, 0.3, 0.4, 1)' }}>
    <p style={{ marginBottom: '20px' }}>Price: per night for every hotel</p>
    <form onSubmit={handleSubmit} className='m-3'>
      <div className='d-flex'>
        <label>
          From Date:
          <input className='mr-2' type="date" onChange={handleInputChange} style={{ width: '100%', padding: '8px', marginTop: '5px', border: '1px solid #ccc', borderRadius: '4px' }} name="fdate" value={formData.fdate} required />
        </label>
        <label>
          To Date:
          <input type="date"  onChange={handleInputChange} style={{ width: '100%', padding: '8px', marginTop: '5px', border: '1px solid #ccc', borderRadius: '4px' }} name="tdate" value={formData.tdate} required/>
        </label>
      </div>

      <label>
        Number of Guests:<br />
        <input className='mr-2 w-100' type="number"  onChange={handleInputChange} style={{ width: '100%', padding: '8px', marginTop: '5px', border: '1px solid #ccc', borderRadius: '4px' }} name="guestnumber" value={formData.guestnumber} required/>
      </label>
      <br />
      <label>
        Full Name:<br />
        <input type="text"  onChange={handleInputChange} style={{ width: '100%', padding: '8px', marginTop: '5px', border: '1px solid #ccc', borderRadius: '4px' }} name="name" value={formData.name} required/>
      </label>
      <br />
      <label>
        Phone Number:<br />
        <input type="phno"  onChange={handleInputChange} style={{ width: '100%', padding: '8px', marginTop: '5px', border: '1px solid #ccc', borderRadius: '4px' }} name="phno" value={formData.phno} required/>
      </label>
      <br />
      <button className='btn-primary' style={{ padding: '10px 20px', border: 'none', borderRadius: '4px', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}>Proceed to pay</button>
    </form></div>
  </div>
</div>
        
        </div>
      )}
      <div className='container'>

<p className='mt-4'>What this place offer!</p>
<div className='mb-4'><strong>{Object.keys(accommodation.amenities).join(', ')}</strong></div> 
</div>
    </div>
    

    </>
  );
}

export default Accodbook;
