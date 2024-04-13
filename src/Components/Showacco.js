// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';


// function AccommodationCard({ accommodation }) {
//   let navigate = useNavigate();

//   const handleDetailsClick = () => {
//     navigate(`/accomod/${accommodation._id}`);
//   };

  
 

//   return (
//     <div>
//     <Card >
//       <Card.Header>{accommodation.propertyName}</Card.Header>
//       <Card.Body>
//         <div>
//           {accommodation.image && <img src={require('../../uploads/' +(accommodation.image))} alt="Accommodation" />}
//           {console.log(accommodation.image)}
//         </div>
//         <Card.Text>
//           <strong>Price:</strong> Rs. {accommodation.price}
//         </Card.Text>
//         <Button variant="primary" onClick={handleDetailsClick}>More Details</Button>
//       </Card.Body>
//     </Card>
//     </div>
//   );
// }

// function UserAccommodations() {
//   const [accommodations, setAccommodations] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUserAccommodations = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get('http://localhost:7420/api/accomod/useraccommodations', {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//             'auth-token': token,
//           },
//         });
//         setAccommodations(response.data);
//       } catch (error) {
//         console.error('Error fetching accommodations:', error);
//         setError('Error fetching accommodations. Please try again later.');
//       }
//     };

//     fetchUserAccommodations();
//   }, []);

//   return (
//     <div>
//       <h1 className='mb-5'>Your Accommodations</h1>
//       <div>
//       {accommodations.map(accommodation => (
//         <AccommodationCard key={accommodation._id} accommodation={accommodation} />
//       ))}</div>
//     </div>
//   );
// }

// export default UserAccommodations;


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
    <div className="col-md-4 mb-4">
      <Card style={{ height: '100%' }}>
        <Card.Header>{accommodation.propertyName}</Card.Header>
        <Card.Body style={{ height: '100%' }}>
          <div style={{ height: '70%' }}>
            {accommodation.image && <img src={require(`../../uploads/${accommodation.image}`)} alt="Accommodation" style={{ width: '100%', objectFit: 'cover' }} />}
          </div>
          <Card.Text>
            <strong>Price:</strong> Rs. {accommodation.price}
          </Card.Text>
          <Button variant="primary mb-4" onClick={handleDetailsClick}>More Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

function UserAccommodations() {
  const [accommodations, setAccommodations] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserAccommodations = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:7420/api/accomod/useraccommodations', {
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
      <h1 className='mb-5'>Your Accommodations</h1>
      <div className="row">
        {accommodations.map(accommodation => (
          <AccommodationCard key={accommodation._id} accommodation={accommodation} />
        ))}
      </div>
    </div>
  );
}

export default UserAccommodations;
