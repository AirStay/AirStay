import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import  './Allaccod.css'

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

    const chunkArray = (arr, size) => {
        const chunkedArr = [];
        for (let i = 0; i < arr.length; i += size) {
            chunkedArr.push(arr.slice(i, i + size));
        }
        return chunkedArr;
    };

    const replaceBackslashes = (path) => {
        return path.replace(/\\/g, '/');
      };

    return (
        <div className="my-3">
            <div className="position-relative p-4">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="row row-cols-1 row-cols-md-2 g-3">
                        {chunkArray(accos, 3).map((chunk, index) => (
                            <div className="col" key={index}>
                                {chunk.map((acco) => (
                                    <div className="card mb-3" key={acco._id}>
                                       {acco.image && <img src={require('../' + replaceBackslashes(acco.image))} alt="Accommodation" />}
                                        <div className="card-body">
                                            <h5 className="card-title">{acco.propertyName}</h5>
                                            <p className="card-text">
                                                Price: {acco.price}<br />
                                            </p>
                                            <Link className="btn btn-primary" to={`/accodbook/${acco._id}`} style={{ backgroundColor: '#007bff', borderColor: '#007bff', transition: 'background-color 0.3s ease, border-color 0.3s ease' }}>Book Now</Link>
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
