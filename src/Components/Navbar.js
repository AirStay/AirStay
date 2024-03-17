import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Filter from './Filter'; // Import the Filter component

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const filterRef = useRef(null); // Create a ref for the Filter component

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleClearFilters = () => {
    if (filterRef.current) {
      // Communicate the clear filter request to the Filter component
      filterRef.current.handleClearFilters();
    }
  };

  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container d-flex justify-content-between align-items-center">
          <Link className="navbar-brand" to="/">
            <img src="/assets/logo.png" alt="Bootstrap" width="100" />
          </Link>

          <div className="d-flex align-items-center">
            <div className="field has-addons border border-dark d-flex" style={{ borderRadius: '100px', padding: '5px' }}>
              <input type="text" className="input mx-1 border-0 bg-transparent" style={{ padding: '5px', borderRadius: '100px', minWidth: '150px' }} placeholder="Search Destination" />
              <input type="date" className="input mx-1 border-0 bg-transparent" style={{ padding: '5px', borderRadius: '100px', minWidth: '120px' }} placeholder="Start date" />
              <input type="date" className="input mx-1 border-0 bg-transparent" style={{ padding: '5px', borderRadius: '100px', minWidth: '120px' }} placeholder="End date" />
              <input type="text" className="input mx-1 border-0 bg-transparent" style={{ padding: '5px', borderRadius: '100px', minWidth: '120px' }} placeholder="Add guests" />
              <button type="button" className="mx-1 btn border-0 bg-transparent"><img src="/assets/magnifying-glass.png" width="25" alt="" /></button>
            </div>
            {/* Prevent event bubbling for buttons */}
            <button type="button" className="mx-1 btn border-0 bg-transparent" onClick={handleShow} onMouseDown={(e) => e.stopPropagation()}>
              <img src="/assets/filter.png" width="30" alt="" />
            </button>
            <button type="button" className="mx-1 btn border-0 bg-transparent" onMouseDown={(e) => e.stopPropagation()}><img src="/assets/loginicon.png" width="30" alt="" /></button>
          </div>
        </div>
      </nav>

      {/* Conditionally render the Filter component */}
      {showModal && <Filter ref={filterRef} showModal={showModal} handleClose={handleClose} onClearFilters={handleClearFilters} />}
    </div>
  );
};

export default Navbar;
