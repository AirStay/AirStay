import React from 'react';
import { Link } from 'react-router-dom';
import Showacco from './Showacco';

const Home = () => {
  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
        <div className="card-body">
          <h5 className="card-title">Card Title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to="#" className="btn btn-primary">Go somewhere</Link>
        </div>
      </div>
      
    </div>
  );
}

export default Home;
