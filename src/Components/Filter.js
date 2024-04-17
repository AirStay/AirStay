import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FaBed, FaHome, FaBuilding, FaHotel, FaWifi, FaTv, FaParking, FaSwimmingPool, FaUtensils, FaWrench, FaHandsWash } from 'react-icons/fa';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

const Filter = ({ showModal, handleClose }) => {
  const [minPrice, setMinPrice] = useState(600);
  const [maxPrice, setMaxPrice] = useState(30000);
  const [sliderValue, setSliderValue] = useState([600, 30000]);
  const [selectedPropertyType, setSelectedPropertyType] = useState(null);
  const [selectedRoomType, setSelectedRoomType] = useState(null);
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const handleModalClose = () => {
    handleClose(); // Close the modal
  };

  const handleSliderChange = (value) => {
    setMinPrice(value[0]);
    setMaxPrice(value[1]);
    setSliderValue(value);
  };

  const handleMinInputChange = (e) => {
    const newMinPrice = parseInt(e.target.value) || 0; // Ensure it's a number, default to 0
    setMinPrice(newMinPrice);
    if (newMinPrice > maxPrice) {
      setMaxPrice(newMinPrice);
      setSliderValue([newMinPrice, newMinPrice]);
    } else {
      setSliderValue([newMinPrice, maxPrice]);
    }
  };
  
  const handleMaxInputChange = (e) => {
    const newMaxPrice = parseInt(e.target.value) || 0; // Ensure it's a number, default to 0
    setMaxPrice(newMaxPrice);
    if (newMaxPrice < minPrice) {
      setMinPrice(newMaxPrice);
      setSliderValue([newMaxPrice, newMaxPrice]);
    } else {
      setSliderValue([minPrice, newMaxPrice]);
    }
  };

  const handlePropertyTypeClick = (type) => {
    setSelectedPropertyType(type === selectedPropertyType ? null : type);
  };

  const handleRoomTypeClick = (type) => {
    setSelectedRoomType(type === selectedRoomType ? null : type);
  };

  const handleAmenitiesClick = (amenity) => {
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities(selectedAmenities.filter(item => item !== amenity));
    } else {
      setSelectedAmenities([...selectedAmenities, amenity]);
    }
  };

  const handleClearFilters = () => {
    setMinPrice(600);
    setMaxPrice(30000);
    setSliderValue([600, 30000]);
    setSelectedPropertyType(null);
    setSelectedRoomType(null);
    setSelectedAmenities([]);
  };

  const handleApplyFilters = () => {
    // Handle applying filters, e.g., sending selected filters to parent component
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
          <RangeSlider
            min={600}
            max={30000}
            value={sliderValue}
            onChange={handleSliderChange}
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
          <Button
            variant="outline-primary"
            style={{ flex: '1', marginRight: '10px', backgroundColor: selectedPropertyType === 'House' ? '#007bff' : 'transparent', color: selectedPropertyType === 'House' ? 'white' : '#007bff' }}
            onClick={() => handlePropertyTypeClick('House')}
          >
            <FaHome size={20} />
            <span style={{ marginLeft: '5px' }}>House</span>
          </Button>
          <Button
            variant="outline-primary"
            style={{ flex: '1', marginRight: '10px', backgroundColor: selectedPropertyType === 'Flat' ? '#007bff' : 'transparent', color: selectedPropertyType === 'Flat' ? 'white' : '#007bff' }}
            onClick={() => handlePropertyTypeClick('Flat')}
          >
            <FaBuilding size={20} />
            <span style={{ marginLeft: '5px' }}>Flat</span>
          </Button>
          <Button
            variant="outline-primary"
            style={{ flex: '1', marginRight: '10px', backgroundColor: selectedPropertyType === 'Guest House' ? '#007bff' : 'transparent', color: selectedPropertyType === 'Guest House' ? 'white' : '#007bff' }}
            onClick={() => handlePropertyTypeClick('Guest House')}
          >
            <FaBed size={20} />
            <span style={{ marginLeft: '5px' }}>Guest House</span>
          </Button>
          <Button
            variant="outline-primary"
            style={{ flex: '1', backgroundColor: selectedPropertyType === 'Hotel' ? '#007bff' : 'transparent', color: selectedPropertyType === 'Hotel' ? 'white' : '#007bff' }}
            onClick={() => handlePropertyTypeClick('Hotel')}
          >
            <FaHotel size={20} />
            <span style={{ marginLeft: '5px' }}>Hotel</span>
          </Button>
        </div>
        <label htmlFor="roomType" className="form-label">Room Type :</label>
        <div className="d-flex justify-content-between">
          <Button
            variant="outline-primary"
            style={{ flex: '1', marginRight: '10px', backgroundColor: selectedRoomType === 'Entire Room' ? '#007bff' : 'transparent', color: selectedRoomType === 'Entire Room' ? 'white' : '#007bff' }}
            onClick={() => handleRoomTypeClick('Entire Room')}
          >
            <FaBed size={20} />
            <span style={{ marginLeft: '5px' }}>Entire Room</span>
          </Button>
          <Button
            variant="outline-primary"
            style={{ flex: '1', marginRight: '10px', backgroundColor: selectedRoomType === 'Room' ? '#007bff' : 'transparent', color: selectedRoomType === 'Room' ? 'white' : '#007bff' }}
            onClick={() => handleRoomTypeClick('Room')}
          >
            <FaHotel size={20} />
            <span style={{ marginLeft: '5px' }}>Room</span>
          </Button>
          <Button
            variant="outline-primary"
            style={{ flex: '1', backgroundColor: selectedRoomType === 'Any Type' ? '#007bff' : 'transparent', color: selectedRoomType === 'Any Type' ? 'white' : '#007bff' }}
            onClick={() => handleRoomTypeClick('Any Type')}
          >
            <FaBuilding size={20} />
            <span style={{ marginLeft: '5px' }}>Any Type</span>
          </Button>
        </div>
        <label htmlFor="amenities" className="form-label mt-3">Amenities:</label>
        <div className="row">
          <div className="col">
            <div className="mb-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="wifi"
                  checked={selectedAmenities.includes('Wi-Fi')}
                  onChange={() => handleAmenitiesClick('Wi-Fi')}
                />
                <label className="form-check-label" htmlFor="wifi"><FaWifi /> Wi-Fi</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="ac"
                  checked={selectedAmenities.includes('AC')}
                  onChange={() => handleAmenitiesClick('AC')}
                />
                <label className="form-check-label" htmlFor="ac"><FaWrench /> AC</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="tv"
                  checked={selectedAmenities.includes('TV')}
                  onChange={() => handleAmenitiesClick('TV')}
                />
                <label className="form-check-label" htmlFor="tv"><FaTv /> TV</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="parking"
                  checked={selectedAmenities.includes('Parking')}
                  onChange={() => handleAmenitiesClick('Parking')}
                />
                <label className="form-check-label" htmlFor="parking"><FaParking /> Free Parking</label>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="mb-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="kitchen"
                  checked={selectedAmenities.includes('Kitchen')}
                  onChange={() => handleAmenitiesClick('Kitchen')}
                />
                <label className="form-check-label" htmlFor="kitchen"><FaUtensils /> Kitchen</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="washingMachine"
                  checked={selectedAmenities.includes('Washing Machine')}
                  onChange={() => handleAmenitiesClick('Washing Machine')}
                />
                <label className="form-check-label" htmlFor="washingMachine"><FaHandsWash /> Washing Machine</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="pool"
                  checked={selectedAmenities.includes('Pool')}
                  onChange={() => handleAmenitiesClick('Pool')}
                />
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
