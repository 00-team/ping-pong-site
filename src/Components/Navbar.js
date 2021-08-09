import React, { useState, useEffect } from 'react';
import {FaTypo3,FaTimes,FaBars} from "react-icons/fa";
import { Link } from 'react-router-dom';


import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
      console.log(click)
  }, [click])
  

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Gallery Album
            <FaTypo3 />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
                <a className="nav-links" onClick={closeMobileMenu} href="#gallery_album">
                    Glories
                </a>
            </li>
            <li>
                <a className="nav-links" onClick={closeMobileMenu} href="#contact_us">
                    Contact Us
                </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
