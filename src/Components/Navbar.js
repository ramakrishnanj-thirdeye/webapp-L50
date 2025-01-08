import React, { useState } from 'react';
import logo from '../assets/dd2.png';
import profile from '../assets/April_img.jpg';
import './CustomSidebar.css'; // Import the sidebar styles

function Navbar({ toggleSidebar }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    return (
        <nav
            className="navbar navbar-expand-lg navbar-light static-top shadow d-flex justify-content-between px-lg-5 px-2 fixed-top"
            style={{
                background: 'linear-gradient(45deg,rgb(22, 79, 16) 0%,rgb(182, 170, 168) 50%,rgb(102, 45, 188) 100%)',
                color: 'white',
                height: '60px', // Ensures consistent height
            }}
        >
            {/* Hamburger Icon for Mobile */}
            <button
                className="navbar-toggler"
                type="button"
                onClick={toggleSidebar}
                style={{
                    borderColor: 'rgba(255,255,255,0.5)',
                }}
            >
                <span
                    className="navbar-toggler-icon"
                    style={{
                        filter: 'invert(1) brightness(1.5)',
                    }}
                ></span>
            </button>

            {/* Brand Logo on the Left */}
            <a className="navbar-brand d-flex align-items-center" href="index.html">
                <div className="navbar-brand-icon d-flex align-items-center">
                    <img
                        src={logo}
                        alt="Brand Logo"
                        style={{
                            width: '150px',
                            height: '40px',
                            objectFit: 'contain',
                            filter: 'drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))',
                        }}
                    />
                </div>
            </a>

            {/* Custom User Dropdown */}
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <div className="dropdown d-flex align-items-center" onClick={toggleDropdown}>
                        {/* Username */}
                        <span
                            className="mr-2 d-none d-lg-inline small"
                            style={{
                                marginRight: '15px',
                                color: 'white',
                                fontSize: '16px',
                                fontWeight: '500',
                                textShadow: '0px 1px 2px rgba(0, 0, 0, 0.4)',
                            }}
                        >
                            April 
                        </span>

                        {/* Profile Image */}
                        <img
                            className="img-profile rounded-circle"
                            style={{
                                height: '40px',
                                width: '40px',
                                cursor: 'pointer',
                                border: '2px solid rgba(255,255,255,0.6)',
                                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            }}
                            src={profile}
                            alt="User"
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.1)';
                                e.currentTarget.style.boxShadow = '0px 6px 10px rgba(0, 0, 0, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.2)';
                            }}
                        />

                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                            <div
                                className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                style={{
                                    position: 'absolute',
                                    top: '50px',
                                    right: '0',
                                    display: 'block',
                                    backgroundColor: '#fff',
                                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                    borderRadius: '4px',
                                    zIndex: 1050,
                                    minWidth: '120px',
                                }}
                            >
                                <a
                                    href="/login.html"
                                    className="dropdown-item"
                                    onClick={() => {
                                        sessionStorage.removeItem('login');
                                    }}
                                    style={{
                                        color: '#333',
                                        fontSize: '14px',
                                        fontWeight: '500',
                                    }}
                                >
                                    <i
                                        className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"
                                        style={{ marginRight: '8px' }}
                                    ></i>
                                    Logout
                                </a>
                            </div>
                        )}
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;


