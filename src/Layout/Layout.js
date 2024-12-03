import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import CustomSidebar from '../Components/Sidebar';
import CopilotInPowerAutomate from '../Components/CopilotInPowerAutomate';
import CopilotInPowerPages from '../Components/CopilotInPowerpages';
import Copilotstudio from '../Components/CopilotStudio';
import CopilotStudioWorking from '../Components/CopilotStudioWorking';
import DataSecurityPrivacy from '../Components/DataSecurityAndPrivacy';
import EmployeeWelcomeSite from '../Components/EmployeeWelcomeSite';
import EnhanceHrProductivity from '../Components/EnhanceHrProductivity';
import Home from '../Components/Home';
import ImproveEfficienciesIt from '../Components/ImproveEfficienciesIt';
import L50DemoUser from '../Components/L50DemoUser';
import M365LicenceAssignment from '../Components/M365LicenceAssignment';
import PowerPlatformFinale from '../Components/PowerPlatformFinale';
import ProcessFlow from '../Components/ProcessFlow';
import ReduceCostRisk from '../Components/ReduceCostAndRisk';
import WorkflowOverview from '../Components/WorkflowOverview';

// Static list of screens
const screens = [
    'dashboard',
    'workflow-overview',
    'process-flow',
    'enhance-hr-productivity',
    'improve-efficiencies-it',
    'data-security',
    'user-video',
    'm365-licence-assignment',
    'copilot-in-power-automate-video',
    'copilot-studio',
    'copilot-studio-video',
    'employee-welcome-site',
    'copilot-power-pages-video',
    'reduce-cost-risk',
    'finale-video',
];

function Layout() {
    const [screen, setScreen] = useState('dashboard'); // Current active screen
    const [step, setStep] = useState(0); // Current step in the play sequence
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Manage sidebar visibility

    // Update the step when the screen changes
    useEffect(() => {
        const currentStep = screens.indexOf(screen);
        if (currentStep !== -1) {
            setStep(currentStep);
        }
    }, [screen]);

    // Handle play button click to move to the next screen
    const handlePlayButtonClick = () => {
        const nextStep = (step + 1) % screens.length;
        setScreen(screens[nextStep]);
    };

    // Handle reverse play button click to move to the previous screen
    const handleReversePlayButtonClick = () => {
        const prevStep = (step - 1 + screens.length) % screens.length;
        setScreen(screens[prevStep]);
    };

    // Render the component based on the active screen
    const renderScreen = () => {
        switch (screen) {
            case 'dashboard':
                return <Home />;
            case 'workflow-overview':
                return <WorkflowOverview />;
            case 'process-flow':
                return <ProcessFlow />;
            case 'enhance-hr-productivity':
                return <EnhanceHrProductivity />;
            case 'improve-efficiencies-it':
                return <ImproveEfficienciesIt />;
            case 'data-security':
                return <DataSecurityPrivacy />;
            case 'user-video':
                return <L50DemoUser />;
            case 'm365-licence-assignment':
                return <M365LicenceAssignment />;
            case 'copilot-in-power-automate-video':
                return <CopilotInPowerAutomate />;
            case 'copilot-studio':
                return <Copilotstudio />;
            case 'copilot-studio-video':
                return <CopilotStudioWorking />;
            case 'employee-welcome-site':
                return <EmployeeWelcomeSite />;
            case 'copilot-power-pages-video':
                return <CopilotInPowerPages />;
            case 'reduce-cost-risk':
                return <ReduceCostRisk />;
            case 'finale-video':
                return <PowerPlatformFinale />;
            default:
                return <div>Page Not Found</div>;
        }
    };

    // Toggle sidebar visibility
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            {/* Navbar */}
            <Navbar toggleSidebar={toggleSidebar} />

            <div className="layout-container">
                {/* Sidebar */}
                <div>
                    <CustomSidebar
                        setScreen={setScreen}
                        activeScreen={screen} // Pass the current screen to the sidebar
                        isSidebarOpen={isSidebarOpen}
                        toggleSidebar={toggleSidebar}
                    />
                </div>

                {/* Main Content Area */}
                <div className="main-content">
                    {renderScreen()}

                    {/* Play Button */}
                    <button
                        className="btn btn-secondary play-button"
                        onClick={handlePlayButtonClick}
                        style={{
                            position: 'fixed',
                            top: '80px',
                            right: '20px',
                        }}
                    >
                        <i className="fa fa-play" aria-hidden="true"></i> {step + 1}
                    </button>

                    {/* Reverse Play Button */}
                    <button
                        className="btn btn-secondary reverse-play-button"
                        onClick={handleReversePlayButtonClick}
                        style={{
                            position: 'absolute', // Corrected duplication
                            top: '10px',          // Adjusted to avoid conflict
                            left: '20px',         // Adjusted to avoid conflict
                            zIndex: 1000,
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '0',
                        }}
                    >
                        <i className="fa fa-arrow-left" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Layout;
