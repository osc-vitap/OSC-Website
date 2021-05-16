import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "./Button";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";
import OSCLogo from "../images/osclogo.png";
import Badge from "@material-ui/core/Badge";
import green from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/red';
import { ThemeProvider } from '@material-ui/styles';


const theme = createMuiTheme({
    palette: {
      secondary: {
        main: '#00e676',
      },
    },
  });
  
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
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#ffffff" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <img src={OSCLogo} className="img" />
            </Link>

            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
              <li className="nav-item" onClick={closeMobileMenu}>
                <Link to="/events" className="nav-links">
                  Events
                </Link>
              </li>
              <li className="nav-item" onClick={closeMobileMenu}>
                <Link to="/team" className="nav-links">
                  Team
                </Link>
              </li>
//               <li className="nav-item" onClick={closeMobileMenu}>
//                 <Link to="/techcast" className="nav-links">
//                   TechCast
//                 </Link>
//               </li>
              <li className="nav-item" onClick={closeMobileMenu}>
                <Badge
                  badgeContent={"New"}
                  color="primary"
                  overlap="circle"
                >
                  <Link to="/projects" className="nav-links">
                    Projects
                  </Link>
                </Badge>
              </li>
              {/* <li className="nav-item" onClick={closeMobileMenu}>
                            <Link to='/gallery' className='nav-links'>
                                Gallery
                            </Link>
                        </li> */}
            </ul>
          </div>
        </div>
      </IconContext.Provider>
      </>
  );
}

export default Navbar;
