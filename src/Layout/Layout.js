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
import M365LicenceAssignment from '../Components/M365LicenceAssignment';
import PowerPlatformFinale from '../Components/PowerPlatformFinale';
import ProcessFlow from '../Components/ProcessFlow';
import ReduceCostRisk from '../Components/ReduceCostAndRisk';
import WorkflowOverview from '../Components/WorkflowOverview';
import UserVideo from '../Components/UserVideo';

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
    // State hooks
    const [screen, setScreen] = useState('dashboard');
    const [step, setStep] = useState(0);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [history, setHistory] = useState([]); // Track navigation history
    const [isBackHovered, setIsBackHovered] = useState(false);
    const [isPlayHovered, setIsPlayHovered] = useState(false);

// Update step when screen changes
useEffect(() => {
    const currentStep = screens.indexOf(screen);
    if (currentStep !== -1) {
      setStep(currentStep);
    }
  }, [screen]); // screens is now defined outside the component, so it doesn't need to be in dependencies

  const handlePlayButtonClick = () => {
    const nextStep = (step + 1) % screens.length;
    setHistory([...history, screen]);
    setScreen(screens[nextStep]);
  };

  const handleSidebarMenuClick = (newScreen) => {
    if (newScreen !== screen) {
      setHistory([...history, screen]);
      setScreen(newScreen);
    }
  };

  const handleBackButtonClick = () => {
    if (history.length > 0) {
      const previousScreen = history[history.length - 1];
      setHistory(history.slice(0, -1));
      setScreen(previousScreen);
    }
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
                return <UserVideo />;
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

    // JSX layout
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
      };
    
      return (
        <div>
          <Navbar toggleSidebar={toggleSidebar} />
          <div className="layout-container">
            <CustomSidebar 
              setScreen={handleSidebarMenuClick} 
              isSidebarOpen={isSidebarOpen} 
              toggleSidebar={toggleSidebar} 
              activeScreen={screen} 
            />
            <div 
              className="main-content fluent-container" 
              style={{ 
                position: 'relative',
                background: `
                  conic-gradient(
                    from 45deg at 50% 50%,
                    rgba(135, 206, 235, 0.6) 0deg,
                    rgba(32, 229, 173, 0.64) 90deg,
                    rgba(33, 162, 191, 0.4) 180deg,
                    rgba(13, 78, 108, 0.4) 270deg,
                    rgba(135, 206, 235, 0.6) 360deg
                  ),
                  linear-gradient(
                    to bottom,
                    rgba(255, 255, 255, 0.1),
                    rgba(255, 255, 255, 0.05)
                  )
                `,
                backdropFilter: 'blur(16px)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: `
                  0 4px 30px rgba(0, 0, 0, 0.1),
                  inset 0 0 80px rgba(255, 255, 255, 0.1)
                `,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                transition: 'all 0.3s ease',
              }}
            >
              {renderScreen()}
              <button 
                className="btn btn-secondary back-button" 
                onClick={handleBackButtonClick}
                onMouseEnter={() => setIsBackHovered(true)}
                onMouseLeave={() => setIsBackHovered(false)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  zIndex: 1000,
                  width: '35px',
                  height: '35px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '0',
                  backgroundColor: isBackHovered ? 'blue' : '',
                  color: isBackHovered ? 'white' : '',
                  transition: 'background-color 0.3s ease',
                }}
              >
                <i className="fa fa-arrow-left" aria-hidden="true" style={{ fontSize: '12px' }}></i>
              </button>
              <button 
                className="btn btn-secondary play-button"
                onClick={handlePlayButtonClick}
                onMouseEnter={() => setIsPlayHovered(true)}
                onMouseLeave={() => setIsPlayHovered(false)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  width: '30px',
                  height: '30px',
                  transition: 'background-color 0.3s ease',
                  backgroundColor: isPlayHovered ? 'blue' : '',
                  color: isPlayHovered ? 'white' : '',
                }}
              >
                <i className="fa fa-play" aria-hidden="true" style={{ fontSize: '12px' }}></i>
                {step + 1}
              </button>
            </div>
          </div>
        </div>
      );
    }
    
    export default Layout;
