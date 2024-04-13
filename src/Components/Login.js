import React from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
const Login = (props) => {
  const [credentials, setCredentials] = useState({email: "", password: ""}) 
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch("http://localhost:7420/api/auth/login", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({email: credentials.email, password: credentials.password})
      });
      const json = await response.json()
      console.log(json);
      if (json.success){
        // Save the auth token and redirect
        localStorage.setItem('token', json.authtoken); 
        navigate("/");
        props.showAlert("Logged in successfully", "success")
    }
    else{
        props.showAlert("Invalid Details", "danger")
    }
}

  const onChange = (e)=>{
      setCredentials({...credentials, [e.target.name]: e.target.value})
  }
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '70vh', // Set minimum height to fill the viewport
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

        <form onSubmit={handleSubmit}>
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
                name="email"
                onChange={onChange}
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
                name="password"
                onChange={onChange}
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

          <button type="submit" className="btn btn-success" style={{ width: '100%' }}>
            Login
          </button>
          
          <div className="mt-3 text-center">
            Don't have an account? <Link to="/register">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
