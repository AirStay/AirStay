import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Signup = (props) => {
  const [credentials, setCredentials] = useState({name: "", email: "", password: "",cpassword: "",phno: ""}) 
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {name,email,password,phno} = credentials;
        const response = await fetch("http://localhost:9050/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password,phno})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            navigate("/");
        //     props.showAlert("Account created successfully", "success");
        }
        else{
            // props.showAlert("Invalid credentials", "danger");
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

        <form className='container' onSubmit={handleSubmit}>
          <fieldset>
            <div className="mb-1">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Name
              </label>
              <input
                type="name"
                className="form-control"
                style={{ width: '100%' }}
                id="exampleFormControlInput1"
                name="name"
                onChange={onChange} 
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
                name="email"
                onChange={onChange}
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
                name="password"
                onChange={onChange}
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
                name="cpassword"
                onChange={onChange} 
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
                name="phno"
                onChange={onChange} 
              />
            </div>
          </fieldset>

          <button type="submit" className="btn btn-success mt-4" style={{ width: '100%' }}>
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
