// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';


// const Allaccomod = () => {
//     const [accos, setAccos] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchAccos = async () => {
//             try {
//                 const token = localStorage.getItem('token');
//                 console.log('Token:', token);

//                 const response = await axios.get('http://localhost:5000/api/disaccomod/allaccomodations', {
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                 });

//                 setAccos(response.data);
//             } catch (error) {
//                 console.error('Error fetching accomodations:', error.response || error.message || error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchAccos();
//     }, []);

//     return (
//         <div className="my-3">
//         <div className="card position-relative">
          
//             {loading ? (
//                 <p>loading...</p>
//             ) : (
//                 <ul className='d-flex'>
//                     {accos.map((acco) => (

//                         <div className="card m-3" style={{ width: '18rem'}}>
//                             <img className="card-img-top" src="..." alt="Room Image" />
//                             <div className="card-body">
//                                 <h5 className="card-title">{acco.propertyName}</h5>
//                                 <div className="row btnrow my-2">
//                                     <div className=""> Location: {acco.address}, {acco.city}, {acco.state}, {acco.pincode}</div>
//                                     <div className=""> {acco.description} </div>
//                                     <div className=""> {acco.propertyType} </div>
//                                     <div className=""> {acco.roomType}</div>
//                                     <div className=""> {acco.checkInTime} </div>
//                                     <div className=""> {acco.checkOutTime} </div>
//                                     <div className=""> {acco.maxGuests} </div>
//                                     <div className=""> {acco.price} </div>
//                                     <div className=""> {acco.moreInfo} </div>
//                                 </div>

//                                 <Link to="/accodbook" className="btn btn-primary">Book Now</Link>
//                             </div>
//                         </div>

//                     ))}

//                 </ul>)}


//         </div></div>
//     );
// }

// export default Allaccomod;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Allaccomod = () => {
    const [accos, setAccos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAccos = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/disaccomod/allaccomodations', {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
                setAccos(response.data);
            } catch (error) {
                console.error('Error fetching accomodations:', error.response || error.message || error);
            } finally {
                setLoading(false);
            }
        };

        fetchAccos();
    }, []);

    // Split the accos array into chunks of 3 for displaying in rows
    const chunkArray = (arr, size) => {
        const chunkedArr = [];
        for (let i = 0; i < arr.length; i += size) {
            chunkedArr.push(arr.slice(i, i + size));
        }
        return chunkedArr;
    };

    return (
        <div className="my-3">
            <div className="card position-relative p-4">
                {loading ? (
                    <p>loading...</p>
                ) : (
                    <div className="row row-cols-1 row-cols-md-2 g-3">
                        {chunkArray(accos, 3).map((chunk, index) => (
                            <div className="col" key={index}>
                                {chunk.map((acco) => (
                                    <div className="card mb-3" key={acco._id}>
                                        <img className="card-img-top" src="..." alt="Room Image" />
                                        <div className="card-body">
                                            <h5 className="card-title">{acco.propertyName}</h5>
                                            <p className="card-text">
                                                Location: {acco.address}, {acco.city}, {acco.state}, {acco.pincode}<br />
                                                Description: {acco.description}<br />
                                                Property Type: {acco.propertyType}<br />
                                                Room Type: {acco.roomType}<br />
                                                Check-in Time: {acco.checkInTime}<br />
                                                Check-out Time: {acco.checkOutTime}<br />
                                                Max Guests: {acco.maxGuests}<br />
                                                Price: {acco.price}<br />
                                                More Info: {acco.moreInfo}
                                            </p>
                                            <Link to="/accodbook" className="btn btn-primary">Book Now</Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Allaccomod;
