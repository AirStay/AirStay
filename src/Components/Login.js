import React from 'react';

const Login = () => {
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
          Login
        </h3>

        <form>
          <fieldset>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                style={{ width: '100%' }}
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
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
              <div className="form-text">
                <a href="#forgot-password-modal" data-bs-toggle="modal">
                  Forgot password?
                </a>
              </div>
            </div>
            <div id="passwordHelpBlock" className="form-text">
              Your password must be 8-20 characters long.
            </div>
          </fieldset>

          <button className="btn btn-success" style={{ width: '100%' }}>
            Login
          </button>
          
          <div className="mt-3 text-center">
            Don't have an account? <a href="/register">Register</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
