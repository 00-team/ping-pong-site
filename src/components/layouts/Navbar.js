import React, { useState, useEffect } from "react";

// redux
import { useSelector, useDispatch } from "react-redux";
// link
import { Link } from "react-router-dom";

// locale
import locale from "../../locale.json";

// icon
import { FaTypo3, FaTimes, FaBars } from "react-icons/fa";
import { GiPingPongBat } from "react-icons/gi";

// css
import "../css/navbar.css";


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [user, setUser] = useState(" ");

  const dispatch = useDispatch();

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            محمود ریزبند <GiPingPongBat />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a
                className="nav-links fa"
                onClick={closeMobileMenu}
                href="#glories"
              >
                افتخارات
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-links fa" onClick={closeMobileMenu} href="#contact_us">
                تماس با ما
              </a>
            </li> 
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
