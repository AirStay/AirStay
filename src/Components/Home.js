import React from 'react';
import { Link } from 'react-router-dom';
import Allaccomod from './Allaccomod';

const Home = () => {
  return (
    <div>
      <Allaccomod/>
      <h5 className="subHeading">Browse by property type</h5>
      <div
        className="card-container d-flex justify-content-between"
      >
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o="
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Hotels</h5>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://r-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o="
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Apartments</h5>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o="
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Resorts</h5>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://q-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o="
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Villas</h5>
          </div>
        </div>
      </div>

      <h5 className="subTrendingHeading">Trending destinations</h5>
      <p className="pSubHeading">Most popular choices for travellers from India</p>
      <div
        className="card-container d-flex justify-content-between"
      >
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o="
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">New Delhi</h5>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://cf.bstatic.com/xdata/images/city/600x600/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o="
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Bangalore</h5>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://cf.bstatic.com/xdata/images/city/600x600/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o="
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Mumbai</h5>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://cf.bstatic.com/xdata/images/city/600x600/684730.jpg?k=e37b93d88c1fe12e827f10c9d6909a1def7349be2c68df5de885deaa4bc01ee3&o="
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Chennai</h5>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://cf.bstatic.com/xdata/images/city/600x600/684940.jpg?k=f8eb21b5c72289407585cef7ff7cfc99798ac9238398d7b27c6929ad6c54f78a&o="
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Varanasi</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
