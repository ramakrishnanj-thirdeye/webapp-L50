import React, { useState } from 'react';
import './CustomSidebar.css'; // Import the sidebar styles

function CustomSidebar({ isSidebarOpen, setScreen , toggleSidebar } ) {
    const [openSubmenu, setOpenSubmenu] = useState(null); // Track the opened submenu

    // Function to toggle submenu visibility
    const toggleSubmenu = (menu) => {
        setOpenSubmenu(openSubmenu === menu ? null : menu);  // Toggle submenu visibility
    };

    return (
        <div className={`custom-sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
            <div className="sidebar-content">
                <ul>
                    {/* Dashboard Menu Item */}
                    <li onClick={() => {setScreen('dashboard') ; toggleSidebar()}}>
                        <i className="fas fa-tachometer-alt"></i> Dashboard
                    </li>

                    {/* System Architecture Menu with Submenu */}
                    <li onClick={() => toggleSubmenu('system-architecture')}>
                        <i className="fas fa-cogs"></i> System Architecture
                        <i className={`fa ${openSubmenu === 'system-architecture' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                    </li>
                    {openSubmenu === 'system-architecture' && (
                        <ul className="submenu">
                            <li onClick={() => {setScreen('workflow-overview'); toggleSidebar()}}>Workflow Overview</li>
                            <li onClick={() => {setScreen('process-flow');toggleSidebar()}}>Process Flow</li>
                        </ul>
                    )}

                    {/* Users Menu with Submenu */}
                    <li onClick={() => toggleSubmenu('users')}>
                        <i className="fas fa-user"></i> Users
                        <i className={`fa ${openSubmenu === 'users' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                    </li>
                    {openSubmenu === 'users' && (
                        <ul className="submenu">
                            <li onClick={() => {setScreen('enhance-hr-productivity');toggleSidebar()}}>Enhance HR Productivity</li>
                            <li onClick={() => {setScreen('improve-efficiencies-it');toggleSidebar()}}>Improve Efficiencies in IT</li>
                            <li onClick={() => {setScreen('data-security');toggleSidebar()}}>Data Security</li>
                            <li onClick={() => {setScreen('user-video');toggleSidebar()}}>User Video</li>
                        </ul>
                    )}

                    {/* Makers Menu with Submenu */}
                    <li onClick={() => toggleSubmenu('makers')}>
                        <i className="fas fa-pen"></i> Makers
                        <i className={`fa ${openSubmenu === 'makers' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                    </li>
                    {openSubmenu === 'makers' && (
                        <ul className="submenu">
                            <li onClick={() => {setScreen('m365-licence-assignment');toggleSidebar()}}>M365 Licence Assignment</li>
                            <li onClick={() => {setScreen('copilot-in-power-automate-video');toggleSidebar()}}>Copilot in Power Automate</li>
                            <li onClick={() => {setScreen('copilot-studio');toggleSidebar()}}>Copilot Studio</li>
                            <li onClick={() => {setScreen('copilot-studio-video');toggleSidebar()}}>Copilot Studio Working</li>
                            <li onClick={() => {setScreen('employee-welcome-site');toggleSidebar()}}>Employee Welcome Site</li>
                            <li onClick={() => {setScreen('copilot-power-pages-video');toggleSidebar()}}>Copilot in Power Pages</li>
                            <li onClick={() => {setScreen('reduce-cost-risk');toggleSidebar()}}>Reduce Cost & Risk</li>
                        </ul>
                    )}

                    {/* Finale Video Menu Item */}
                    <li onClick={() => {setScreen('finale-video');toggleSidebar()}}>
                        <i className="fas fa-video"></i> Finale Video
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default CustomSidebar;
