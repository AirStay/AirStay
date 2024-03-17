import React, { useState } from 'react';
// Import CSS file for styles (if needed)

const UserInfo = ({ fullName, emailAddress, phoneNumber }) => {
  return (
    <div>
      <p>Your Name: {fullName}</p>
      <p>Email Address: {emailAddress}</p>
      <p>Phone Number: {phoneNumber}</p>
    </div>
  );
};

const EditProfileForm = ({ onClose }) => {
  const [fullName, setFullName] = useState('Your Full Name');
  const [emailAddress, setEmailAddress] = useState('your.email@example.com');
  const [phoneNumber, setPhoneNumber] = useState('1234567890');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          className="form-control"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="emailAddress">Email Address</label>
        <input
          type="email"
          className="form-control"
          id="emailAddress"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="tel"
          className="form-control"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Save Changes
      </button>
      <button type="button" className="btn btn-secondary ml-2" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
};

const ChangePasswordForm = ({ onClose }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="currentPassword">Current Password</label>
        <input
          type="password"
          className="form-control"
          id="currentPassword"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="newPassword">New Password</label>
        <input
          type="password"
          className="form-control"
          id="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm New Password</label>
        <input
          type="password"
          className="form-control"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Change Password
      </button>
      <button type="button" className="btn btn-secondary ml-2" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
};

const EditProfileButton = () => {
  const [isOpen, setIsOpen] = useState(false);

const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        className={`btn btn-success m-2`}
        onClick={handleOpen}
        style={{ borderRadius: '25px', width: '13vw' }}
      >
        Edit Profile
      </button>
      {isOpen && <EditProfileForm onClose={handleClose} />}
    </>
  );
};

const ChangePasswordButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        className={`btn btn-success m-2`}
        onClick={handleOpen}
        style={{ borderRadius: '25px', width: '13vw' }}
      >
        Change Password
      </button>
      {isOpen && <ChangePasswordForm onClose={handleClose} />}
    </>
  );
};

const Profile = () => {
  const [activeButton, setActiveButton] = useState('profile'); // Set a default active button

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <div className="centered-container" style={{ display: 'flex', justifyContent: 'center', margin: '4vh' }}>
      <div className="button-container">
        <button
          className={`btn ${activeButton === 'profile' ? 'btn-success' : 'btn-secondary'}`}
          onClick={() => handleButtonClick('profile')} style={{ marginRight: '10px' }}
        >
          My Profile
        </button>
        <button
          className={`btn ${activeButton === 'booking' ? 'btn-success' : 'btn-secondary'}`}
          onClick={() => handleButtonClick('booking')}style={{ marginRight: '10px' }}
        >
          My Booking
        </button>
        <button
          className={`btn ${activeButton === 'accommodation' ? 'btn-success' : 'btn-secondary'}`}
          onClick={() => handleButtonClick('accommodation')} style={{ marginRight: '10px' }}
        >
          My Accommodation
        </button>

        {activeButton === 'profile' && (
          <div className="profile-details mt-4">
            <UserInfo
              fullName="Your Full Name"
              emailAddress="your.email@example.com"
              phoneNumber="1234567890"
            />
            <EditProfileButton />
            <ChangePasswordButton />
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;