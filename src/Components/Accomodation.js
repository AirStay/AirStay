import React, { useState } from 'react';
import MyAccomodation from './MyAccomodation'; // Assuming the form component is imported
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Accommodation() {
  const [showForm, setShowForm] = useState(false);

  const handleAddPlace = () => {
    setShowForm(true);
  };

  return (
    <div>

    <div style={{justifyContent:'center', alignItems: 'center',display:'flex'}}>
      {!showForm && (
          <button className='btn btn-success m-2' style={{ borderRadius: '25px', width: '13vw' }} onClick={handleAddPlace}>
          <FontAwesomeIcon icon={faPlus} /> Add a Place
        </button>
      )}
      {showForm && <MyAccomodation onClose={() => setShowForm(false)} />}
    </div>
    </div>
  );
}

export default Accommodation;
