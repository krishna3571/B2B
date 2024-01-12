// Import React and necessary components
import React, { useState } from 'react';
import './css/Sidebar.css'; // Import your CSS file

// Functional component for the App
const Sidebar = () => {
    const [isSidebarClosed, setSidebarClosed] = useState(false);
    const [isDarkMode, setDarkMode] = useState(false);

    const toggleSidebar = () => {
        setSidebarClosed(!isSidebarClosed);
    };

    const toggleDarkMode = () => {
        setDarkMode(!isDarkMode);
    };

    const handleMouseEnter = () => {
        if (isSidebarClosed) {
            setSidebarClosed(false);
        }
    };

    const handleMouseLeave = () => {
        if (isSidebarClosed) {
            setSidebarClosed(true);
        }
    };

    const handleSubmenuClick = (index) => {
        // Handle submenu click
        // Logic for managing submenu state goes here
    };

    return (
        <>
            {/* Navbar */}
            <div className={`App ${isSidebarClosed ? 'expanded' : 'collapsed'}`}>
                <nav className="navbar">
                    <div className="logo_item" onClick={toggleSidebar}>
                        <i className="bx bx-menu" id="sidebarOpen"></i>
                        <img src="images/logo.png" alt=""></img>CodingNepal
                    </div>

                    <div className="search_bar">
                        <input type="text" placeholder="Search" />
                    </div>

                    <div className="navbar_content">
                        <i className="bi bi-grid"></i>
                        <i className={`bx ${isDarkMode ? 'bx-moon' : 'bx-sun'}`} id="darkLight" onClick={toggleDarkMode}></i>
                        <i className='bx bx-bell'></i>
                        <img src="images/profile.jpg" alt="" className="profile" />
                    </div>
                </nav>

                {/* Sidebar */}
                <nav className={`sidebar ${isSidebarClosed ? '' : 'close'}`} >
                    <div className="menu_content">
                        <ul className="menu_items">
                            {/* Dashboard */}
                            <li className="item">
                                <div className="nav_link submenu_item">
                                    <span className="navlink_icon">
                                        <i className="bx bx-home-alt"></i>
                                    </span>
                                    <span className="navlink">Home</span>
                                    <i className="bx bx-chevron-right arrow-left"></i>
                                </div>

                                <ul className="menu_items submenu">
                                    <a href="#" className="nav_link sublink">Nav Sub Link</a>
                                    <a href="#" className="nav_link sublink">Nav Sub Link</a>
                                    <a href="#" className="nav_link sublink">Nav Sub Link</a>
                                    <a href="#" className="nav_link sublink">Nav Sub Link</a>
                                </ul>
                            </li>

                            {/* Overview */}
                            <li className="item">
                                <div className="nav_link submenu_item">
                                    <span className="navlink_icon">
                                        <i className="bx bx-grid-alt"></i>
                                    </span>
                                    <span className="navlink">Overview</span>
                                    <i className="bx bx-chevron-right arrow-left"></i>
                                </div>

                                <ul className="menu_items submenu">
                                    <a href="#" className="nav_link sublink">Nav Sub Link</a>
                                    <a href="#" className="nav_link sublink">Nav Sub Link</a>
                                    <a href="#" className="nav_link sublink">Nav Sub Link</a>
                                    <a href="#" className="nav_link sublink">Nav Sub Link</a>
                                </ul>
                            </li>
                        </ul>

                        {/* Editor */}
                        <ul className="menu_items">
                            <li className="item">
                                <a href="#" className="nav_link">
                                    <span className="navlink_icon">
                                        <i className="bx bxs-magic-wand"></i>
                                    </span>
                                    <span className="navlink">Magic build</span>
                                </a>
                            </li>
                            <li className="item">
                                <a href="#" className="nav_link">
                                    <span className="navlink_icon">
                                        <i className="bx bx-loader-circle"></i>
                                    </span>
                                    <span className="navlink">Filters</span>
                                </a>
                            </li>
                            <li className="item">
                                <a href="#" className="nav_link">
                                    <span className="navlink_icon">
                                        <i className="bx bx-filter"></i>
                                    </span>
                                    <span className="navlink">Filter</span>
                                </a>
                            </li>
                            <li className="item">
                                <a href="#" className="nav_link">
                                    <span className="navlink_icon">
                                        <i className="bx bx-cloud-upload"></i>
                                    </span>
                                    <span className="navlink">Upload new</span>
                                </a>
                            </li>
                        </ul>

                        {/* Setting */}
                        <ul className="menu_items">
                            <li className="item">
                                <a href="#" className="nav_link">
                                    <span className="navlink_icon">
                                        <i className="bx bx-flag"></i>
                                    </span>
                                    <span className="navlink">Notice board</span>
                                </a>
                            </li>
                            <li className="item">
                                <a href="#" className="nav_link">
                                    <span className="navlink_icon">
                                        <i className="bx bx-medal"></i>
                                    </span>
                                    <span className="navlink">Award</span>
                                </a>
                            </li>
                            <li className="item">
                                <a href="#" className="nav_link">
                                    <span className="navlink_icon">
                                        <i className="bx bx-cog"></i>
                                    </span>
                                    <span className="navlink">Setting</span>
                                </a>
                            </li>
                            <li className="item">
                                <a href="#" className="nav_link">
                                    <span className="navlink_icon">
                                        <i className="bx bx-layer"></i>
                                    </span>
                                    <span className="navlink">Features</span>
                                </a>
                            </li>
                        </ul>

                        {/* Sidebar Open / Close */}
                        <div className="bottom_content">
                            <div className="bottom expand_sidebar" onClick={toggleSidebar}>
                                <span> Expand</span>
                                <i className='bx bx-log-in'></i>
                            </div>
                            <div className="bottom collapse_sidebar" onClick={toggleSidebar}>
                                <span> Collapse</span>
                                <i className='bx bx-log-out'></i>
                            </div>


                        </div>


                    </div>
                </nav>
            </div>
        </>
    );
};

export default Sidebar;
