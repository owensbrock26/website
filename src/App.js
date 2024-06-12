import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import TrimFit from './TrimFit/TrimFit';
import LeadsGiant from './leadsgiant/LeadsGiant';
import Home from './Home'; // import the Home component

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link to="/">Home</Link> {/* Change the link to '/' */}
          <Link to="/trimfit">TrimFit</Link>
          <Link to="/leadsgiant">Leads Giant</Link>
        </nav>
        <Routes>
          <Route path="/trimfit/*" element={<TrimFit />} />
          <Route path="/leadsgiant" element={<LeadsGiant />} />
          <Route path="/*" element={<Home />} /> {/* Change the route to '/*' */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;