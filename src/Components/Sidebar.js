import React, { useState, useEffect } from 'react';
import './CustomSidebar.css'; // Import the CSS file

function CustomSidebar({ isSidebarOpen, setScreen, activeScreen, toggleSidebar }) {
    const [openSubmenu, setOpenSubmenu] = useState(null);

    // Automatically open submenu if an active screen is part of it
    useEffect(() => {
        if (['workflow-overview', 'process-flow'].includes(activeScreen)) {
            setOpenSubmenu('system-architecture');
        } else if (
            ['enhance-hr-productivity', 'improve-efficiencies-it', 'data-security', 'user-video'].includes(activeScreen)
        ) {
            setOpenSubmenu('users');
        } else if (
            [
                'm365-licence-assignment',
                'copilot-in-power-automate-video',
                'copilot-studio',
                'copilot-studio-video',
                'employee-welcome-site',
                'copilot-power-pages-video',
                'reduce-cost-risk',
            ].includes(activeScreen)
        ) {
            setOpenSubmenu('makers');
        } else {
            setOpenSubmenu(null);
        }
    }, [activeScreen]);

    const isActive = (screen) => activeScreen === screen;
    const isSubmenuActive = (screens) => screens.includes(activeScreen);

    return (
        <div className={`custom-sidebar ${isSidebarOpen ? 'open' : ''}`}>
            <div className="sidebar-content">
                <ul>
                    {/* Dashboard */}
                    <li
                        className={`menu-item ${isActive('dashboard') ? 'active' : ''}`}
                        onClick={() => {
                            setScreen('dashboard');
                            toggleSidebar();
                        }}
                    >
                        <i className="fas fa-tachometer-alt"></i> Dashboard
                    </li>

                    {/* System Architecture */}
                    <li
                        className={`menu-item ${
                            isSubmenuActive(['workflow-overview', 'process-flow']) ? 'active' : ''
                        }`}
                        onClick={() =>
                            setOpenSubmenu(openSubmenu === 'system-architecture' ? null : 'system-architecture')
                        }
                    >
                        <i className="fas fa-cogs"></i> System Architecture
                        <i
                            className={`submenu-icon fas fa-chevron-down ${
                                openSubmenu === 'system-architecture' ? 'rotate' : ''
                            }`}
                        ></i>
                    </li>
                    {openSubmenu === 'system-architecture' && (
                        <ul className="submenu">
                            <li
                                className={`submenu-item ${isActive('workflow-overview') ? 'active' : ''}`}
                                onClick={() => {
                                    setScreen('workflow-overview');
                                    toggleSidebar();
                                }}
                            >
                                Workflow Overview
                            </li>
                            <li
                                className={`submenu-item ${isActive('process-flow') ? 'active' : ''}`}
                                onClick={() => {
                                    setScreen('process-flow');
                                    toggleSidebar();
                                }}
                            >
                                Process Flow
                            </li>
                        </ul>
                    )}

                    {/* Users */}
                    <li
                        className={`menu-item ${
                            isSubmenuActive([
                                'enhance-hr-productivity',
                                'improve-efficiencies-it',
                                'data-security',
                                'user-video',
                            ])
                                ? 'active'
                                : ''
                        }`}
                        onClick={() => setOpenSubmenu(openSubmenu === 'users' ? null : 'users')}
                    >
                        <i className="fas fa-user"></i> Users
                        <i className={`submenu-icon fas fa-chevron-down ${openSubmenu === 'users' ? 'rotate' : ''}`}></i>
                    </li>
                    {openSubmenu === 'users' && (
                        <ul className="submenu">
                            <li
                                className={`submenu-item ${isActive('enhance-hr-productivity') ? 'active' : ''}`}
                                onClick={() => {
                                    setScreen('enhance-hr-productivity');
                                    toggleSidebar();
                                }}
                            >
                                Enhance HR Productivity Click-through
                            </li>
                            <li
                                className={`submenu-item ${isActive('improve-efficiencies-it') ? 'active' : ''}`}
                                onClick={() => {
                                    setScreen('improve-efficiencies-it');
                                    toggleSidebar();
                                }}
                            >
                                Improve Efficiencies IT Click-through
                            </li>
                            <li
                                className={`submenu-item ${isActive('data-security') ? 'active' : ''}`}
                                onClick={() => {
                                    setScreen('data-security');
                                    toggleSidebar();
                                }}
                            >
                                Data Security Click-through
                            </li>
                            <li
                                className={`submenu-item ${isActive('user-video') ? 'active' : ''}`}
                                onClick={() => {
                                    setScreen('user-video');
                                    toggleSidebar();
                                }}
                            >
                                User Video
                            </li>
                        </ul>
                    )}

                    {/* Makers */}
                    <li
                        className={`menu-item ${
                            isSubmenuActive([
                                'm365-licence-assignment',
                                'copilot-in-power-automate-video',
                                'copilot-studio',
                                'copilot-studio-video',
                                'employee-welcome-site',
                                'copilot-power-pages-video',
                                'reduce-cost-risk',
                            ])
                                ? 'active'
                                : ''
                        }`}
                        onClick={() => setOpenSubmenu(openSubmenu === 'makers' ? null : 'makers')}
                    >
                        <i className="fas fa-users"></i> Makers
                        <i className={`submenu-icon fas fa-chevron-down ${openSubmenu === 'makers' ? 'rotate' : ''}`}></i>
                    </li>
                    {openSubmenu === 'makers' && (
                        <ul className="submenu">
                            {[
                                { screen: 'm365-licence-assignment', label: 'M365 License Automation through Copilot Click-through' },
                                { screen: 'copilot-in-power-automate-video', label: 'Copilot in Power Automate Video' },
                                { screen: 'copilot-studio', label: 'Copilot Studio Click-through' },
                                { screen: 'copilot-studio-video', label: 'Copilot Studio Video' },
                                { screen: 'employee-welcome-site', label: 'Employee Welcome Site Click-through' },
                                { screen: 'copilot-power-pages-video', label: 'Copilot in Power Pages Video' },
                                { screen: 'reduce-cost-risk', label: 'Reduce Cost Risk Click-through' },
                            ].map(({ screen, label }) => (
                                <li
                                    key={screen}
                                    className={`submenu-item ${isActive(screen) ? 'active' : ''}`}
                                    onClick={() => {
                                        setScreen(screen);
                                        toggleSidebar();
                                    }}
                                >
                                    {label}
                                </li>
                            ))}
                        </ul>
                    )}

                    {/* Finale Video */}
                    <li
                        className={`menu-item ${isActive('finale-video') ? 'active' : ''}`}
                        onClick={() => {
                            setScreen('finale-video');
                            toggleSidebar();
                        }}
                    >
                        <i className="fas fa-video"></i> Finale Video
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default CustomSidebar;
