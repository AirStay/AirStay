import React, { useState, useRef } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import Accomodation from "./Accomodation";
import {
  FaBed,
  FaHome,
  FaBuilding,
  FaHotel,
  FaWifi,
  FaTv,
  FaParking,
  FaSwimmingPool,
  FaUtensils,
  FaHandsWash,
} from "react-icons/fa";

const MyAccommodation = () => {

  const [selectedType, setSelectedType] = useState('');
  const [selectedType1, setSelectedType1] = useState(''); // State to track selected property type

  const handleButtonClick = (type) => {
    setSelectedType(type === selectedType ? '' : type); // Toggle selected type
  };
  
  const handleButtonClick2 = (type) => {
    setSelectedType1(type === selectedType1 ? '' : type); // Toggle selected type
  };

  const [formData, setFormData] = useState({
    propertyName: "",
    address: {
      area: "",
      city: "",
      state: "",
      pinCode: "",
    },
    photos: null,
    description: "",
    propertyType: "",
    roomType: "",
    amenities: {},
    moreInfo: "",
    checkInTime: "",
    checkOutTime: "",
    maxGuests: "",
    price: "",
  });
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFormData({ ...formData, photos: selectedFile });
  };

  const handleBtnClick= () => {
    fileInputRef.current.click();
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      amenities: {
        ...formData.amenities,
        [e.target.name]: e.target.checked,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const formDataToSend = new FormData();
      formDataToSend.append("propertyName", formData.propertyName);
      formDataToSend.append("address", JSON.stringify(formData.address));
      formDataToSend.append("photos", formData.photos);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("propertyType", formData.propertyType);
      formDataToSend.append("roomType", formData.roomType);
      formDataToSend.append("amenities", JSON.stringify(formData.amenities));
      formDataToSend.append("moreInfo", formData.moreInfo);
      formDataToSend.append("checkInTime", formData.checkInTime);
      formDataToSend.append("checkOutTime", formData.checkOutTime);
      formDataToSend.append("maxGuests", formData.maxGuests);
      formDataToSend.append("price", formData.price);

      const res = await axios.post("http://localhost:5000/api/accomod/addaccomodation", formDataToSend, config);
      console.log("Accommodation added successfully:", res.data);
      // Optionally, you can redirect the user or show a success message here
    } catch (err) {
      console.error("Error adding accommodation:", err.response.data);
      // Optionally, you can display an error message to the user
    }
  };

  return (
    <Container>
      <h1>Add Accommodation</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="propertyName">
          <Form.Label>Property Name *</Form.Label>
          <Form.Control required
            type="text"
            placeholder="Property Name"
            name="propertyName"
            value={formData.propertyName}
            onChange={handleInputChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="address">
          <Form.Label>Address *</Form.Label>
          <div className="d-flex">
            <Form.Control
              required
              type="text"
              className="mr-3"
              placeholder="Area"
              name="area"
              value={formData.address.area}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  address: { ...formData.address, area: e.target.value },
                })
              }
            />
            <Form.Control
              required
              type="text"
              className="mr-3"
              placeholder="City"
              name="city"
              value={formData.address.city}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  address: { ...formData.address, city: e.target.value },
                })
              }
            />
            <Form.Control
              required
              type="text"
              className="mr-3"
              placeholder="State"
              name="state"
              value={formData.address.state}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  address: { ...formData.address, state: e.target.value },
                })
              }
            />
            <Form.Control
              required
              type="text"
              className="mr-3"
              placeholder="Pin code"
              name="pinCode"
              value={formData.address.pinCode}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  address: { ...formData.address, pinCode: e.target.value },
                })
              }
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="photos">
          <Form.Label>Photos *</Form.Label>
          <div className="d-flex">
            <Form.Control
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
              required
            />
          </div>
          <div className="border d-flex p-2" style={{ width: "40%" }}>
            {formData.photos ? formData.photos.name : "No file Selected"}
            <Button className="btn btn-success  ml-3" onClick={handleBtnClick}>
              Upload Photo
            </Button>
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description *</Form.Label>
          <Form.Control
            required
            as="textarea"
            rows={3}
            placeholder="Describe your place"
      
            onChange={handleInputChange}
          />
        </Form.Group>

        

        {/* <Form.Group className="mb-3" controlId="propertyType">
          <Form.Label>Property Type *</Form.Label>
          <div className="d-flex">
            <Button
              variant="outline border"
              style={{
                flex: "1",
                marginRight: "10px",
                backgroundColor: "transparent",
              }}
            >
              <FaHome size={20} />
              <span style={{ marginLeft: "5px" }}>House</span>
            </Button>
            <Button
              variant="outline border"
              style={{
                flex: "1",
                marginRight: "10px",
                backgroundColor: "transparent",
              }}
            >
              <FaBuilding size={20} />
              <span style={{ marginLeft: "5px" }}>Flat</span>
            </Button>
            <Button
              variant="outline border"
              style={{
                flex: "1",
                marginRight: "10px",
                backgroundColor: "transparent",
              }}
            >
              <FaBed size={20} />
              <span style={{ marginLeft: "5px" }}>Guest House</span>
            </Button>
            <Button
              variant="outline border"
              style={{ flex: "1", backgroundColor: "transparent" }}
            >
              <FaHotel size={20} />
              <span style={{ marginLeft: "5px" }}>Hotel</span>
            </Button>
          </div>
        </Form.Group> */}

<Form.Group className="mb-3" controlId="propertyType">
      <Form.Label>Property Type *</Form.Label>
      <div className="d-flex">
        <Button
          variant={selectedType === 'house' ? 'primary' : 'outline border'}
          style={{ flex: '1', marginRight: '10px',color:'black', backgroundColor: 'transparent' }}
          onClick={() => handleButtonClick('house')}
        >
          <FaHome size={20} />
          <span style={{ marginLeft: '5px' }}>House</span>
        </Button>
        {/* Repeat similar code for other buttons */}
        <Button
          variant={selectedType === 'flat' ? 'primary' : 'outline border'}
          style={{ flex: '1', marginRight: '10px',color:'black', backgroundColor: 'transparent'}}
          onClick={() => handleButtonClick('flat')}
        >
          <FaBuilding size={20} />
          <span style={{ marginLeft: '5px' }}>Flat</span>
        </Button>

        <Button
          variant={selectedType === 'guest' ? 'primary' : 'outline border'}
          style={{ flex: '1', marginRight: '10px',color:'black', backgroundColor: 'transparent'}}
          onClick={() => handleButtonClick('guest')}
        >
          <FaBuilding size={20} />
          <span style={{ marginLeft: '5px' }}>Guest House</span>
        </Button>
        <Button
          variant={selectedType === 'hotel' ? 'primary' : 'outline border'}
          style={{ flex: '1', marginRight: '10px',color:'black', backgroundColor: 'transparent'}}
          onClick={() => handleButtonClick('hotel')}
        >
          <FaBuilding size={20} />
          <span style={{ marginLeft: '5px' }}>Hotel</span>
        </Button>
        {/* Add buttons for Guest House and Hotel similarly */}
      </div>
    </Form.Group>

        <Form.Group className="mb-3" controlId="roomType">
          <Form.Label>Room Type *</Form.Label>
          <div className="d-flex">
            {/* <Button
              variant="outline border"
              style={{
                flex: "1",
                marginRight: "10px",
                backgroundColor: "transparent",
              }}
            >
              <FaHome size={20} />
              <span style={{ marginLeft: "5px" }}>Entire room</span>
            </Button>
            <Button
              variant="outline border"
              style={{
                flex: "1",
                marginRight: "10px",
                backgroundColor: "transparent",
              }}
            >
              <FaBuilding size={20} />
              <span style={{ marginLeft: "5px" }}>Room</span>
            </Button>
            // <Button
            //   variant="outline border"
            //   style={{ flex: "1", backgroundColor: "transparent" }}
            // >
            //   <FaHotel size={20} />
            //   <span style={{ marginLeft: "5px" }}>Any Type</span>
            // </Button> */}
            <Button
          variant={selectedType1 === 'entire' ? 'primary' : 'outline border'}
          style={{ flex: '1', marginRight: '10px',color:'black', backgroundColor: 'transparent'}}
          onClick={() => handleButtonClick2('entire')}
        >
          <FaBuilding size={20} />
          <span style={{ marginLeft: '5px' }}>Entire room</span>
        </Button>

        <Button
          variant={selectedType1 === 'room' ? 'primary' : 'outline border'}
          style={{ flex: '1', marginRight: '10px',color:'black', backgroundColor: 'transparent'}}
          onClick={() => handleButtonClick2('room')}
        >
          <FaBuilding size={20} />
          <span style={{ marginLeft: '5px' }}>Room</span>
        </Button>

        <Button
          variant={selectedType1 === 'any' ? 'primary' : 'outline border'}
          style={{ flex: '1', marginRight: '10px',color:'black', backgroundColor: 'transparent'}}
          onClick={() => handleButtonClick2('any')}
        >
          <FaBuilding size={20} />
          <span style={{ marginLeft: '5px' }}>Any Type</span>
        </Button>
          </div>

          
        </Form.Group>


        <Form.Group className="mb-3" controlId="amenities">
          <Form.Label>Amenities *</Form.Label>
          <div className="mb-3 d-flex">
            <div className="form-check mr-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="wifi"
              />
              <label className="form-check-label" htmlFor="wifi">
                <FaWifi /> Wi-Fi
              </label>
            </div>
            <div className="form-check mr-5">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="ac"
              />
              <label className="form-check-label" htmlFor="ac">
                <FaWifi /> AC
              </label>
            </div>
            <div className="form-check mr-5">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="tv"
              />
              <label className="form-check-label" htmlFor="tv">
                <FaTv /> TV
              </label>
            </div>
            <div className="form-check mr-5">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="parking"
              />
              <label className="form-check-label" htmlFor="parking">
                <FaParking /> Free Parking
              </label>
            </div>
            <div className="form-check mr-5">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="kitchen"
              />
              <label className="form-check-label" htmlFor="kitchen">
                <FaUtensils /> Kitchen
              </label>
            </div>
            <div className="form-check mr-5">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="washingMachine"
              />
              <label className="form-check-label" htmlFor="washingMachine">
                <FaHandsWash /> Washing Machine
              </label>
            </div>
            <div className="form-check mr-5">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="pool"
              />
              <label className="form-check-label" htmlFor="pool">
                <FaSwimmingPool /> Pool
              </label>
            </div>
          </div>
          <Form.Group className="mb-3 ml-3" controlId="description">
            <Form.Label>More Info </Form.Label>
            <Form.Control
              required
              as="textarea"
              rows={3}
              placeholder="Describe your place"
              value={formData.moreInfo}
              onChange={handleInputChange}
            />
          </Form.Group>
          <div className="d-flex">
            <Form.Group className="mb-3 ml-3" controlId="checkInTime">
              <Form.Label>Check-In Time *</Form.Label>
              <Form.Control
                required
                type="time"
                placeholder="Check-In Time"
                name="checkInTime"
                value={formData.checkInTime}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3 ml-3" controlId="checkOutTime">
              <Form.Label>Check-Out Time *</Form.Label>
              <Form.Control
                required
                type="time"
                placeholder="Check-Out Time"
                name="checkOutTime"
                value={formData.checkOutTime}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3 ml-3" controlId="maxGuests">
              <Form.Label>Maximum Guests *</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Maximum Guests"
                name="maxGuests"
                value={formData.maxGuests}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3 ml-3" controlId="price">
              <Form.Label>Price *</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
              />
            </Form.Group>

          </div>
        </Form.Group>

        <Button
          className="btn btn-large btn-block btn-primary mt-3 mb-3"
          type="submit"
        >
          Save
        </Button>
      </Form>
    </Container>
  );
};

export default MyAccommodation;