import React, { useState, useRef } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import Alert from "./Alert";
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
  FaFan,
} from "react-icons/fa";

const MyAccommodation = () => {
  let navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  
  const setAlert  = (message, type)=>{
    setShowAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setShowAlert(null);
    }, 1500);
}
  const [formData, setFormData] = useState({
    propertyName: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    description: "",
    propertyType: "",
    roomType: "",
    amenities: {},
    moreInfo: "",
    checkInTime: "",
    checkOutTime: "",
    maxGuests: "",
    price: "",
    image: null, // Added for storing the selected image file
  });
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      amenities: {
        ...prevFormData.amenities,
        [name]: checked,
      },
    }));
  };



  const handlePropertyTypeChange = (type) => {
    setFormData({ ...formData, propertyType: type });
  };

  const handleRoomTypeChange = (type) => {
    setFormData({ ...formData, roomType: type });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFormData({ ...formData, image: selectedFile });


  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    const { propertyName, image, address, city, state, pincode, description, propertyType, roomType, amenities, moreInfo, checkInTime, checkOutTime, maxGuests, price } = formData;

    const formDataToSend = new FormData();
    formDataToSend.append('propertyName', propertyName);
    formDataToSend.append('address', address);
    formDataToSend.append('city', city);
    formDataToSend.append('state', state);
    formDataToSend.append('pincode', pincode);
    formDataToSend.append('description', description);
    formDataToSend.append('propertyType', propertyType);
    formDataToSend.append('roomType', roomType);
    Object.entries(amenities).forEach(([key, value]) => {
      formDataToSend.append(`amenities.${key}`, value);
    });
    formDataToSend.append('moreInfo', moreInfo);
    formDataToSend.append('checkInTime', checkInTime);
    formDataToSend.append('checkOutTime', checkOutTime);
    formDataToSend.append('maxGuests', maxGuests);
    formDataToSend.append('price', price);
    formDataToSend.append('image', image); // Append the image file

    try {
      const response = await axios.post("http://localhost:7420/api/accomod/addaccomodation", formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'auth-token': token,
        } 
      });

      console.log(response.data);
      setAlert(true);
      navigate("/profile");
    } catch (error) {
      console.error("Error adding accommodation:", error);
    }
  };

  return (
    <Container>
       {showAlert && (
        <Alert alert={{ type: "success", msg: "Accommodation added successfully" }} />
      )}
      <h1>Add Accommodation</h1>
      <Form onSubmit={handleSubmit} style={{ border: '1px solid black', padding: '20px', borderRadius: '15px', marginBottom: '2rem', marginTop: '2rem' }}>
        <Form.Group className="mb-3" controlId="propertyName">
          <Form.Label>Property Name *</Form.Label>
          <Form.Control required
            type="text"
            placeholder="Property Name"
            name="propertyName"
            value={formData.propertyName}
            onChange={handleInputChange} />
        </Form.Group>

        <Form.Group className="d-flex">
          <Form.Group className="mb-3 mr-3" controlId="address" name="address">
            <Form.Label>Address *</Form.Label>
            <Form.Control
              // style={{width:'25%'}}
              required
              type="text"
              rows={3}
              placeholder="Address"
              name="address"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3 mr-3" controlId="city" name="city">
            <Form.Label>City *</Form.Label>
            <Form.Control
              // style={{width:'25%'}}
              required
              type="text"
              rows={3}
              placeholder="City"
              name="city"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3 mr-3" controlId="state" name="state">
            <Form.Label>State *</Form.Label>
            <Form.Control
              // style={{width:'25%'}}
              required
              type="text"
              rows={3}
              placeholder="State"
              name="state"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3 mr-3" controlId="pincode" name="pincode">
            <Form.Label>Pincode *</Form.Label>
            <Form.Control
              // style={{width:'25%'}}
              required
              type="text"
              rows={3}
              placeholder="Pincode"
              name="pincode"
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form.Group>
        <Form.Group controlId="image">
          <Form.Label>Image *</Form.Label>
          <div className="d-flex">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
              required
            />
          </div>
          <div className="border d-flex p-2" style={{ width: "40%" }}>
            {formData.image ? formData.image.name : "No file selected"}
            <Button className="btn btn-success ml-3" onClick={handleButtonClick}>
              Upload Image
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
            name="description"
            onChange={handleInputChange}
          />
        </Form.Group>


        <Form.Group className="mb-3" controlId="propertyType">
          <Form.Label>Property Type *</Form.Label>
          <div className="d-flex">
            <Button
              variant="outline border"
              style={{ flex: "1", marginRight: "10px", backgroundColor: formData.propertyType === "House" ? "#ddd" : "transparent" }}
              onClick={() => handlePropertyTypeChange("House")}
            >
              <FaHome size={20} />
              <span style={{ marginLeft: "5px" }}>House</span>
            </Button>
            <Button
              variant="outline border"
              style={{ flex: "1", marginRight: "10px", backgroundColor: formData.propertyType === "Flat" ? "#ddd" : "transparent" }}
              onClick={() => handlePropertyTypeChange("Flat")}
            >
              <FaBuilding size={20} />
              <span style={{ marginLeft: "5px" }}>Flat</span>
            </Button>
            <Button
              variant="outline border"
              style={{ flex: "1", marginRight: "10px", backgroundColor: formData.propertyType === "Guest House" ? "#ddd" : "transparent" }}
              onClick={() => handlePropertyTypeChange("Guest House")}
            >
              <FaBed size={20} />
              <span style={{ marginLeft: "5px" }}>Guest House</span>
            </Button>
            <Button
              variant="outline border"
              style={{ flex: "1", backgroundColor: formData.propertyType === "Hotel" ? "#ddd" : "transparent" }}
              onClick={() => handlePropertyTypeChange("Hotel")}
            >
              <FaHotel size={20} />
              <span style={{ marginLeft: "5px" }}>Hotel</span>
            </Button>
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="roomType">
          <Form.Label>Room Type *</Form.Label>
          <div className="d-flex">
            <Button
              variant="outline border"
              style={{ flex: "1", marginRight: "10px", backgroundColor: formData.roomType === "Entire room" ? "#ddd" : "transparent" }}
              onClick={() => handleRoomTypeChange("Entire room")}
            >
              <FaHome size={20} />
              <span style={{ marginLeft: "5px" }}>Entire room</span>
            </Button>
            <Button
              variant="outline border"
              style={{ flex: "1", marginRight: "10px", backgroundColor: formData.roomType === "Room" ? "#ddd" : "transparent" }}
              onClick={() => handleRoomTypeChange("Room")}
            >
              <FaBuilding size={20} />
              <span style={{ marginLeft: "5px" }}>Room</span>
            </Button>
            <Button
              variant="outline border"
              style={{ flex: "1", backgroundColor: formData.roomType === "Any Type" ? "#ddd" : "transparent" }}
              onClick={() => handleRoomTypeChange("Any Type")}
            >
              <FaHotel size={20} />
              <span style={{ marginLeft: "5px" }}>Any Type</span>
            </Button>
          </div>
        </Form.Group>


        <Form.Group className="mb-3" controlId="amenities">
          <Form.Label>Amenities *</Form.Label>
          <div className="mb-3 d-flex">
            <div className="form-check mr-4">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="wifi"
                onChange={handleCheckboxChange}
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
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="ac">
                <FaFan /> AC
              </label>
            </div>
            <div className="form-check mr-5">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="tv"
                onChange={handleCheckboxChange}
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
                onChange={handleCheckboxChange}
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
                onChange={handleCheckboxChange}
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
                onChange={handleCheckboxChange}
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
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="pool">
                <FaSwimmingPool /> Pool
              </label>
            </div>
          </div>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>More Info </Form.Label>
            <Form.Control
              required
              as="textarea"
              rows={3}
              placeholder="Describe your place"
              name="moreInfo"
              value={formData.moreInfo}
              onChange={handleInputChange}
            />
          </Form.Group>
          <div className="d-flex">
            <Form.Group className="mb-3 mr-3" controlId="checkInTime">
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

            <Form.Group className="mb-3 mr-3" controlId="checkOutTime">
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

            <Form.Group className="mb-3 mr-3" controlId="maxGuests">
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

            <Form.Group className="mb-3 mr-3" controlId="price">
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

