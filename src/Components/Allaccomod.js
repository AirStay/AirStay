import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Allaccomod = () => {
    const [accos, setAccos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAccos = async () => {
            try {
                const token = localStorage.getItem('token');
                console.log('Token:', token);

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

    return (
        <div className='d-flex'>
            {loading ? (
                <p>loading...</p>
            ) : (
                <ul>
                    {accos.map((acco) => (

                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src="..." alt="Room Image" />
                            <div className="card-body">
                                <h5 className="card-title">{acco.propertyName}</h5>
                                <div className="row btnrow my-4">
                                    <div className=""> Location: {acco.address}, {acco.city}, {acco.state}, {acco.pincode}</div>
                                    <div className=""> {acco.description} </div>
                                    <div className=""> {acco.propertyType} </div>
                                    <div className=""> {acco.roomType}</div>
                                    <div className=""> {acco.checkInTime} </div>
                                    <div className=""> {acco.checkOutTime} </div>
                                    <div className=""> {acco.maxGuests} </div>
                                    <div className=""> {acco.price} </div>
                                    <div className=""> {acco.moreInfo} </div>
                                </div>

                                <Link to="/accodbook" className="btn btn-primary">Book Now</Link>
                            </div>
                        </div>

                    ))}

                </ul>)}


        </div>
    );
}

export default Allaccomod;