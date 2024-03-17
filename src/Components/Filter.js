import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FaBed, FaHome, FaBuilding, FaHotel, FaWifi, FaTv, FaParking, FaSwimmingPool, FaUtensils, FaWrench, FaMailchimp, FaHandsWash, FaWater } from 'react-icons/fa';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Filter = ({ showModal, handleClose }) => {
  const [minPrice, setMinPrice] = useState(600);
  const [maxPrice, setMaxPrice] = useState(30000);
  const [sliderValue, setSliderValue] = useState([600, 30000]);

  const handleModalClose = () => {
    handleClose(); // Close the modal
  };

  const handleSliderChange = (value) => {
    setMinPrice(value[0]);
    setMaxPrice(value[1]);
    setSliderValue(value);
  };

  const handleMinInputChange = (e) => {
    const newMinPrice = parseInt(e.target.value);
    setMinPrice(newMinPrice);
    if (newMinPrice > maxPrice) {
      setMaxPrice(newMinPrice);
      setSliderValue([newMinPrice, newMinPrice]);
    } else {
      setSliderValue([newMinPrice, maxPrice]);
    }
  };

  const handleMaxInputChange = (e) => {
    const newMaxPrice = parseInt(e.target.value);
    setMaxPrice(newMaxPrice);
    if (newMaxPrice < minPrice) {
      setMinPrice(newMaxPrice);
      setSliderValue([newMaxPrice, newMaxPrice]);
    } else {
      setSliderValue([minPrice, newMaxPrice]);
    }
  };

  const handleClearFilters = () => {
    setMinPrice(600);
    setMaxPrice(30000);
    setSliderValue([600, 30000]);
  };

  const handleApplyFilters = () => {
    // Handle applying filters, e.g., sending selected price range to parent component
    handleClose();
  };

  return (
    <Modal show={showModal} onHide={handleModalClose} centered backdrop="static">
      <Modal.Header closeButton>
        <h5 className="modal-title text-center w-100">Filters</h5>
      </Modal.Header>
      <Modal.Body>
        <label htmlFor="priceRange" className="form-label">Price Range:</label>
        <div className="mb-3">
          <Slider
            min={600}
            max={30000}
            value={sliderValue}
            onChange={handleSliderChange}
            style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto' }}
          />
          <div className="d-flex justify-content-between" style={{ marginTop: '10px' }}>
            <span>600</span>
            <span>30,000</span>
          </div>
        </div>
        <div className="d-flex justify-content-between mb-3">
          <input type="number" className="form-control text-center" value={minPrice} onChange={handleMinInputChange} style={{ width: '48%' }} />
          <input type="number" className="form-control text-center" value={maxPrice} onChange={handleMaxInputChange} style={{ width: '48%' }} />
        </div>
        <label htmlFor="propertyType" className="form-label">Property Type:</label>
        <div className="d-flex justify-content-between">
          <Button variant="outline-primary" style={{ flex: '1', marginRight: '10px', backgroundColor: 'transparent' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#007bff'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
            <FaHome size={20} />
            <span style={{ marginLeft: '5px' }}>House</span>
          </Button>
          <Button variant="outline-primary" style={{ flex: '1', marginRight: '10px', backgroundColor: 'transparent' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#007bff'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
            <FaBuilding size={20} />
            <span style={{ marginLeft: '5px' }}>Flat</span>
          </Button>
          <Button variant="outline-primary" style={{ flex: '1', marginRight: '10px', backgroundColor: 'transparent' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#007bff'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
            <FaBed size={20} />
            <span style={{ marginLeft: '5px' }}>Guest House</span>
          </Button>
          <Button variant="outline-primary" style={{ flex: '1', backgroundColor: 'transparent' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#007bff'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
            <FaHotel size={20} />
            <span style={{ marginLeft: '5px' }}>Hotel</span>
          </Button>
          
        </div>
        <label htmlFor="roomType" className="form-label">Room Type :</label>
        <div className="d-flex justify-content-between">
          <Button variant="outline-primary" style={{ flex: '1', marginRight: '10px', backgroundColor: 'transparent' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#007bff'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
            <FaBed size={20} />
            <span style={{ marginLeft: '5px' }}>Entire Room</span>
          </Button>
          <Button variant="outline-primary" style={{ flex: '1', marginRight: '10px', backgroundColor: 'transparent' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#007bff'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
            <FaHotel size={20} />
            <span style={{ marginLeft: '5px' }}>Room</span>
          </Button>
          <Button variant="outline-primary" style={{ flex: '1', backgroundColor: 'transparent' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#007bff'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
            <FaBuilding size={20} />
            <span style={{ marginLeft: '5px' }}>Any Type</span>
          </Button>
        </div>
        <label htmlFor="amenities" className="form-label mt-3">Amenities:</label>
      <div className="row">
        <div className="col">
          <div className="mb-3">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="wifi" />
              <label className="form-check-label" htmlFor="wifi"><FaWifi /> Wi-Fi</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="ac" />
              <label className="form-check-label" htmlFor="ac"><FaWifi /> AC</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="tv" />
              <label className="form-check-label" htmlFor="tv"><FaTv /> TV</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="parking" />
              <label className="form-check-label" htmlFor="parking"><FaParking /> Free Parking</label>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="mb-3">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="kitchen" />
              <label className="form-check-label" htmlFor="kitchen"><FaUtensils /> Kitchen</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="washingMachine" />
              <label className="form-check-label" htmlFor="washingMachine"><FaHandsWash /> Washing Machine</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="pool" />
              <label className="form-check-label" htmlFor="pool"><FaSwimmingPool /> Pool</label>
            </div>
          </div>
        </div>
      </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClearFilters}>
          Clear Filters
        </Button>
        <Button variant="primary" onClick={handleApplyFilters}>
          Apply Filters
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Filter;
