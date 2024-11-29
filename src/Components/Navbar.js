import React, { useState } from 'react';
import logo from '../assets/boulder innovation logo.png';
import profile from '../assets/April_img.jpg';
import './CustomSidebar.css'; // Import the sidebar styles

function Navbar({ toggleSidebar }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-gradient topbar static-top shadow d-flex justify-content-between px-lg-5 px-2 fixed-top">
            {/* Hamburger Icon for Mobile */}
            <button className="navbar-toggler" type="button" onClick={toggleSidebar}>
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* Brand Logo on the Left */}
            <a className="navbar-brand d-flex align-items-center" href="index.html">
                <div className="navbar-brand-icon">
                    <img
                        src={logo}
                        alt="Brand Logo"
                        style={{ width: '150px', height: '40px' }}
                    />
                </div>
            </a>
            {/* Custom User Dropdown */}
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <div className="dropdown" onClick={toggleDropdown}>
                        {/* Username */}
                        <span
                            className="mr-2 d-none d-lg-inline text-gray-600 small"
                            style={{ marginRight: '15px' }} // Added spacing
                        >
                            April
                        </span>

                        {/* Profile Image */}
                        <img
                            className="img-profile rounded-circle"
                            style={{ height: '40px', width: '40px', cursor: 'pointer' }}
                            src={profile}
                            alt="User"
                        />

                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                            <div
                                className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                style={{
                                    position: 'absolute',
                                    top: '40px', // Position below the profile picture
                                    right: '0',                     
                                    display: 'block',
                                    backgroundColor: '#fff',
                                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                    borderRadius: '4px',
                                    zIndex: 1050, // Ensure it appears above other elements
                                    minWidth: '100px',
                                }}
                            >
                                <a
                                    href="/login.html"
                                    className="dropdown-item"
                                    onClick={() => { sessionStorage.removeItem('login') }}
                                >
                                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
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


