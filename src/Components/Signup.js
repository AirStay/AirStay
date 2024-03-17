import React from 'react';

const Signup = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh', // Set minimum height to fill the viewport
      }}
    >
      <div
        style={{
          border: '1px solid #ccc',
          padding: '1rem',
          borderRadius: '0.5rem',
          width: '80%', // Adjust width as needed
          maxWidth: '500px' // Optional: Limit maximum width
        }}
      >
        <h3 className='mt-4' style={{ textAlign: 'center' }}>
          Register
        </h3>

        <form className='container'>
          <fieldset>
            <div className="mb-1">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                style={{ width: '100%' }}
                id="exampleFormControlInput1"
              />
            </div>
            <div className="mb-1">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                style={{ width: '100%' }}
                id="exampleFormControlInput1"
              />
            </div>
            <div className="mb-1">
              <label htmlFor="inputPassword5" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="inputPassword5"
                className="form-control"
                style={{ width: '100%' }}
                aria-describedby="passwordHelpBlock"
              />
            </div>

            <div id="passwordHelpBlock" className="form-text">
              Your password must be 8-20 characters long.
            </div>
            <div className="mb-1 mt-1">
              <label htmlFor="inputPassword5" className="form-label">
                Confirm  Password
              </label>
              <input
                type="password"
                id="inputPassword5"
                className="form-control"
                style={{ width: '100%' }}
                aria-describedby="passwordHelpBlock"
              />
            </div>
            <div className="mb-1">
              <label htmlFor="inputPassword5" className="form-label">
                Phone Number
              </label>
              <input
                type="number"
                id="inputPassword5"
                className="form-control"
                style={{ width: '100%' }}
                aria-describedby="passwordHelpBlock"
              />
            </div>
          </fieldset>

          <button className="btn btn-success mt-4" style={{ width: '100%' }}>
            Register
          </button>

          <div className="mt-2 text-center">
            Already a User? <a href="/login">Login</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
