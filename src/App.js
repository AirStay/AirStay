// App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
// import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Filter from './Components/Filter';
import Home from './Components/Home';
import Profile from './Components/Profile';
import Payment from './Components/Payment';
import MyAccommodation from './Components/MyAccomodation';
import Accodbook from './Components/Accodbook';
import Paymentsuccess from './Components/Paymentsuccess';
import Mybooking from './Components/Mybooking';
import AccommodationDetails from './Components/Showaccodetails';
import Booking from './Components/Booking';

function App() {
  return (
    <Router> {/* Wrap your components with Router */}
      <>
        <Navbar />
        {/* <Payment/> */}
        <div className="container">
          <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/myaccomodation" element={<MyAccommodation />} />
            <Route path="/accodbook/:id" element={<Accodbook />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/paymentsuccess" element={<Paymentsuccess />} />
            <Route path="/mybooking" element={<Mybooking />} />
            <Route path="/accomod/:id" element={<AccommodationDetails/>} />
            <Route path="/booking/:id" element={<Booking/>} />
          </Routes>
        </div>
        <Filter />
      </>
    </Router>
  );
}

export default App;

