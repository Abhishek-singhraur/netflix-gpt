import React from 'react'
import Login from './Login';
import Browse from './Browse';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';


const Body = () => {

  return (
    
      <Router>
      <Routes> {/* Use Routes as the parent */}
        <Route path="/" element={<Login />} /> {/* Use Route for each path */}
        <Route path="/browse" element={<Browse />} /> {/* Use Route for each path */}
      </Routes>
    </Router>
   
   );
};

export default Body;