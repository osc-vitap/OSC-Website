import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from './Button'
import './Navbar.css';
import { IconContext } from 'react-icons/lib';
import OSCLogo from '../images/osclogo.png';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{ color: '#ffffff' }}>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <img src={OSCLogo} className="img"/>
                    </Link>
                    
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item" onClick={closeMobileMenu}>
                            <Link to='/events' className='nav-links'>
                                Events
                            </Link>
                        </li>
                        <li className="nav-item" onClick={closeMobileMenu}>
                            <Link to='/team' className='nav-links'>
                                Team
                            </Link>
                        </li>
                        <li className="nav-btn">
                            {button ? (
                                <Link to='/wios' className="btn-link">
                                    <Button buttonStyle='btn--outline'>Women in Open Source</Button>
                                </Link>
                            ): (
                                <Link to='/wios' className='btn-link' onClick={closeMobileMenu}>
                                    <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>
                                        Women in Open Source
                                    </Button>
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            </div> 
            </IconContext.Provider>
        </>
    )
}

export default Navbar
