// // App.js
// import './App.css';
// import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
// // import Login from './Components/Login';
// import Navbar from './Components/Navbar';
// // import Login from './Components/Login';
// // import Signup from './Components/Signup';
// import Filter from './Components/Filter';

// function App() {
//   return (
//     <Router> {/* Wrap your components with Router */}
//       <>
//         <Navbar />
//         {/* <Login />
//         <Signup /> */}
//         <Filter />
//       </>
//     </Router>
//   );
// }

// export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Signup from "./Components/Signup";
import Filter from "./Components/Filter";
import Home from './Components/Home';

function App() {
  return (
    <>

      <Router>
      <Filter/>
        <Navbar />
        <div className="container">
          <Routes>
      
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Home />} />
            
          </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;

