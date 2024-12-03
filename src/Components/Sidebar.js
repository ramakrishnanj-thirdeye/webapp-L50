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
        <div className={`custom-sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
            <div className="sidebar-content">
                <ul>
                    {/* Dashboard */}
            <li
                className={`primary dashboard ${isActive('dashboard') ? 'active' : ''}`}
                onClick={() => {
                    setScreen('dashboard');
                    toggleSidebar();
                }}
            >
                <i className="fas fa-tachometer-alt"></i> Dashboard
            </li>

            {/* System Architecture */}
            <li
                className={`primary no-background ${
                    isSubmenuActive(['workflow-overview', 'process-flow']) ? 'active' : ''
                }`}
                onClick={() => setOpenSubmenu(openSubmenu === 'system-architecture' ? null : 'system-architecture')}
            >
                <i className="fas fa-cogs"></i> System Architecture
                <i
                    className={`fa ${
                        openSubmenu === 'system-architecture' ? 'fa-chevron-up' : 'fa-chevron-down'
                    }`}
                ></i>
            </li>
            {openSubmenu === 'system-architecture' && (
                <ul className="submenu">
                    <li
                        className={isActive('workflow-overview') ? 'active' : ''}
                        onClick={() => {
                            setScreen('workflow-overview');
                            toggleSidebar();
                        }}
                    >
                        Workflow Overview
                    </li>
                    <li
                        className={isActive('process-flow') ? 'active' : ''}
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
                className={`primary no-background ${
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
                <i className={`fa ${openSubmenu === 'users' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </li>
            {openSubmenu === 'users' && (
                <ul className="submenu">
                    <li
                        className={isActive('enhance-hr-productivity') ? 'active' : ''}
                        onClick={() => {
                            setScreen('enhance-hr-productivity');
                            toggleSidebar();
                        }}
                    >
                        Enhance HR Productivity
                    </li>
                    <li
                        className={isActive('improve-efficiencies-it') ? 'active' : ''}
                        onClick={() => {
                            setScreen('improve-efficiencies-it');
                            toggleSidebar();
                        }}
                    >
                        Improve Efficiencies IT
                    </li>
                    <li
                        className={isActive('data-security') ? 'active' : ''}
                        onClick={() => {
                            setScreen('data-security');
                            toggleSidebar();
                        }}
                    >
                        Data Security
                    </li>
                    <li
                        className={isActive('user-video') ? 'active' : ''}
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
                className={`primary no-background ${
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
                <i className={`fa ${openSubmenu === 'makers' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </li>
            {openSubmenu === 'makers' && (
                <ul className="submenu">
                    <li
                        className={isActive('m365-licence-assignment') ? 'active' : ''}
                        onClick={() => {
                            setScreen('m365-licence-assignment');
                            toggleSidebar();
                        }}
                    >
                        M365 Licence Assignment
                    </li>
                    <li
                        className={isActive('copilot-in-power-automate-video') ? 'active' : ''}
                        onClick={() => {
                            setScreen('copilot-in-power-automate-video');
                            toggleSidebar();
                        }}
                    >
                        Copilot in Power Automate Video
                    </li>
                    <li
                        className={isActive('copilot-studio') ? 'active' : ''}
                        onClick={() => {
                            setScreen('copilot-studio');
                            toggleSidebar();
                        }}
                    >
                        Copilot Studio
                    </li>
                    <li
                        className={isActive('copilot-studio-video') ? 'active' : ''}
                        onClick={() => {
                            setScreen('copilot-studio-video');
                            toggleSidebar();
                        }}
                    >
                        Copilot Studio Video
                    </li>
                    <li
                        className={isActive('employee-welcome-site') ? 'active' : ''}
                        onClick={() => {
                            setScreen('employee-welcome-site');
                            toggleSidebar();
                        }}
                    >
                        Employee Welcome Site
                    </li>
                    <li
                        className={isActive('copilot-power-pages-video') ? 'active' : ''}
                        onClick={() => {
                            setScreen('copilot-power-pages-video');
                            toggleSidebar();
                        }}
                    >
                        Copilot Power Pages Video
                    </li>
                    <li
                        className={isActive('reduce-cost-risk') ? 'active' : ''}
                        onClick={() => {
                            setScreen('reduce-cost-risk');
                            toggleSidebar();
                        }}
                    >
                        Reduce Cost Risk
                    </li>
                </ul>
            )}

            {/* Finale Video */}
            <li
                className={`primary final-video ${isActive('finale-video') ? 'active' : ''}`}
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
