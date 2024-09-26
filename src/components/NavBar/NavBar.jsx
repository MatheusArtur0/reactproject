import React, { useState } from 'react';
import './NavBar.module.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/path/to/logo1.png" alt="Logo" />
      </div>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>

      </ul>
      <div className="burger" onClick={toggleNav}>
        <div className={isOpen ? "line1 toggle" : "line1"}></div>
        <div className={isOpen ? "line2 toggle" : "line2"}></div>
        <div className={isOpen ? "line3 toggle" : "line3"}></div>
      </div>
    </nav>
  );
};

export default NavBar;