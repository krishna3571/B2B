

import React, { useState } from 'react';
import '../src/css/Sidebar.css'; // Import your CSS file

const YourComponent = () => {
    const [isNavbarOpen, setNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setNavbarOpen(!isNavbarOpen);
    };

    const closeNavbar = () => {
        setNavbarOpen(false);
    };

    return (
        <>
            <nav className={isNavbarOpen ? 'open' : ''}>
                <div className="logo" onClick={toggleNavbar}>
                    <i className={`bx ${isNavbarOpen ? 'bx-x' : 'bx-menu'} menu-icon`}>H</i>
                    <span className="logo-name">CodingLab</span>
                </div>
                <div className="sidebar">
                    {/* Sidebar content goes here */}
                    <div className="logo" onClick={closeNavbar}>
                        <i className="bx bx-menu menu-icon"></i>
                        <span className="logo-name">CodingLab</span>
                    </div>

                    <div className="sidebar-content">
                        <ul className="lists">
                            {/* Sidebar list items go here */}
                        </ul>

                        <div className="bottom-content">
                            <li className="list">
                                <a href="#" className="nav-link">
                                    <i className="bx bx-cog icon"></i>
                                    <span className="link">Settings</span>
                                </a>
                            </li>
                            <li className="list">
                                <a href="#" className="nav-link">
                                    <i className="bx bx-log-out icon"></i>
                                    <span className="link">Logout</span>
                                </a>
                            </li>
                        </div>
                    </div>
                </div>
            </nav>

            <section className="overlay" onClick={closeNavbar}></section>
        </>
    );
};

export default YourComponent;


