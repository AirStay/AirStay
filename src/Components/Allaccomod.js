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
                const response = await axios.get('http://localhost:7420/api/disaccomod/allaccomodations', {
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



    return (
        <div className="my-3">
        <div className="p-4">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="row row-cols-md-3">
              {chunkArray(accos, 1).map((chunk, index) => (
                <div className="col" key={index}>
                  {chunk.map((acco) => (
                    <div className="card mb-3" key={acco._id} style={{ border: '2px solid black' }}>
                      {acco.image && <img src={require(`../../uploads/${acco.image}`)} alt="Accommodation" />}
                      <div className="card-body">
                        <h5 className="card-title">{acco.propertyName}</h5>
                        <p className="card-text">
                          Price: {acco.price}<br />
                        </p>
                        <Link className="btn btn-primary" to={`/booking/${acco._id}`} style={{ backgroundColor: '#007bff', borderColor: '#007bff', transition: 'background-color 0.3s ease, border-color 0.3s ease' }}>Book Now</Link>
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
