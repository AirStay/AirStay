import React, { useState, useRef } from "react";
import { Form, Button, Container } from "react-bootstrap";
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
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFileName(selectedFile ? selectedFile.name : "");
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Do something with the file, like uploading it to a server
    if (file) {
      console.log("File uploaded:", file);
      // You can include file upload logic here (e.g., using fetch API)
    } else {
      console.log("No file selected");
    }
  };

  return (
    <Container>
      <h1>Add Accommodation</h1>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="propertyName">
          <Form.Label>Property Name *</Form.Label>
          <Form.Control required type="text" placeholder="Title" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="address">
          <Form.Label>Address *</Form.Label>
          <div className="d-flex">
            <Form.Control
              required
              type="text"
              className="mr-3"
              placeholder="Area"
              style={{ width: "25%" }}
            />
            <Form.Control
              required
              type="text"
              className="mr-3"
              placeholder="City"
              style={{ width: "25%" }}
            />
            <Form.Control
              required
              type="text"
              className="mr-3"
              placeholder="State"
              style={{ width: "25%" }}
            />
            <Form.Control
              required
              type="text"
              className="mr-3"
              placeholder="Pin code"
              style={{ width: "25%" }}
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
            {fileName}
            {/* <input type="file" /> */}
            <Button className="btn btn-success" onClick={handleButtonClick}>
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
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="propertyType">
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
        </Form.Group>

        <Form.Group className="mb-3" controlId="roomType">
          <Form.Label>Room Type *</Form.Label>
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
            <Button
              variant="outline border"
              style={{ flex: "1", backgroundColor: "transparent" }}
            >
              <FaHotel size={20} />
              <span style={{ marginLeft: "5px" }}>Any Type</span>
            </Button>
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="amenities">
          <Form.Label>Amenities *</Form.Label>
          <div className="mb-3 d-flex">
            <div className="form-check mr-5">
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
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>More Info </Form.Label>
            <Form.Control
              required
              as="textarea"
              rows={3}
              placeholder="Describe your place"
            />
          </Form.Group>
          <div className="d-flex">
            <div style={{width:'25%'}}>
              {" "}
              <label htmlFor="">Check-In Time</label>
            </div>

            <div style={{width:'25%'}}>
              {" "}
              <label htmlFor="">Check-Out Time</label>
            </div>
            <div style={{width:'25%'}}>
              {" "}
              <label htmlFor="">Maximum Guests</label>
            </div>
            <div>
              {" "}
              <label htmlFor="">Price</label>
            </div>
          </div>
          <div className="d-flex">
            <div style={{width:'25%'}}>
              {" "}
              <input type="time"style={{width:'50%'}}/>
            </div>
            <div style={{width:'25%'}}>
              {" "}
              <input type="time"style={{width:'50%'}} />
            </div>
            <div style={{width:'25%'}}>
              {" "}
              <input type="text"style={{width:'50%'}} />
            </div>
            <div style={{width:'25%'}}>
              {" "}
              <input type="text"style={{width:'50%'}} />
            </div>
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