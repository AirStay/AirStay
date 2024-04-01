// App.js
import './App.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'; // Import BrowserRouter
// import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Filter from './Components/Filter';
import Home from './Components/Home';
import Profile from './Components/Profile';
import Payment from './Components/Payment';
import MyAccommodation from './Components/MyAccomodation';
import Showacco from './Components/Showacco';

function App() {
  return (
    <Router> {/* Wrap your components with Router */}
      <>
        <Navbar />
        {/* <Payment/> */}
        <div className="container">
          <Routes>
            <Route path='/profile' element={<Profile/>} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/myaccomodation" element={<MyAccommodation />} />
         
          </Routes>
        </div>
        <Filter />
      </>
    </Router>
  );
}

export default App;

