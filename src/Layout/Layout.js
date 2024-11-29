import React, { useEffect, useState } from 'react';
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
import Navbar from '../Components/Navbar';
import PowerPlatformFinale from '../Components/PowerPlatformFinale';
import ProcessFlow from '../Components/ProcessFlow';
import ReduceCostRisk from '../Components/ReduceCostAndRisk';
import CustomSidebar from '../Components/Sidebar';
import WorkflowOverview from '../Components/WorkflowOverview';

// Move the screens array outside the component to make it static
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
    const [screen, setScreen] = useState('dashboard');
    const [step, setStep] = useState(0);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Manage sidebar state

    useEffect(() => {
        const currentStep = screens.indexOf(screen);
        if (currentStep !== -1) {
            setStep(currentStep);
        }
    }, [screen]); // No need to include 'screens' as it is now static

    const handlePlayButtonClick = () => {
        const nextStep = (step + 1) % screens.length;
        setScreen(screens[nextStep]);
    };

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

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            <Navbar toggleSidebar={toggleSidebar} />
            <div className="layout-container">
                {/* Sidebar */}
                <div>
                    <CustomSidebar setScreen={setScreen} isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                </div>

                {/* Main content area */}
                <div className="main-content">
                    {renderScreen()}

                    {/* Play Button */}
                    <button
                        className="btn btn-primary play-button"
                        onClick={handlePlayButtonClick}
                        style={{
                            position: 'fixed',
                            top: '90px',
                            right: '20px',
                        }}
                    >
                        <i className="fa fa-play" aria-hidden="true"></i> {step + 1}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Layout;
