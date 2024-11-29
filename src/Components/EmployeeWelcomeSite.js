import React, { useState } from 'react';

function EmployeeWelcomeSite() {
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false); // Hide the loader once the iframe is fully loaded
  };

  return (
    <div id="content-wrapper" className="d-flex flex-column">
      {/* Main Content */}
      <div id="content">
        {/* Begin Page Content */}
        <div className="container-fluid">
          {/* Area Chart */}
          <div className="card-body d-flex justify-content-center align-items-center p-0" style={{ position: "relative" }}>
            {isLoading && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  zIndex: 10,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="spinner-border text-primary" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )}
            <iframe
              id="demoframe"
              style={{ height: "calc(100vh - 56px)", width: "100%" }}
              sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox"
              src="https://regale.cloud/thirdeye-data/play/3788/power-platform-employee-welcome-site-power-page-maker#/0/0"
              title="Employee Welcome Site"
              onLoad={handleIframeLoad} // Triggered when iframe is fully loaded
            ></iframe>
          </div>
        </div>
        {/* /.container-fluid */}
      </div>
    </div>
  );
}

export default EmployeeWelcomeSite;
