
const logo = '/Logo.svg'

import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  return <nav id="navbar">
    <div className="nav-left">
        <img id="logo" src={logo} alt="logo" /> 
        <h1>PELAJAR DATA</h1>
    </div>
    <div className={"nav-center" + (menuOpen ? " open" : "") }>
      <a href="#intro" onClick={() => setMenuOpen(false)}>Join Us!</a>
      <a href="#mission" onClick={() => setMenuOpen(false)}>Mission</a>
      {/* <a href="#activities" onClick={() => setMenuOpen(false)}>Activities</a> */}
      <a href="" onClick={() => navigate('/events')}>Events</a>
      <a href="" onClick={() => navigate('/collaborate')}>Let's Collab</a>
    </div>
      <div className="nav-right">
        <div className="hamburger" id="hamburger" onClick={() => setMenuOpen(!menuOpen)}>&#9776;</div>
      </div>
  </nav>;
};

export default navbar;