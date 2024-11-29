import React from 'react'

function EmployeeWelcomeSite() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      {/* Main Content */}
      <div id="content">
        {/* Begin Page Content */}
        <div className="container-fluid">
          {/* Area Chart */}
            <div className="card-body d-flex justify-content-center align-items-center p-0">
              <iframe
                id="demoframe"
                style={{ height: "calc(100vh - 56px)", width: "100%" }}
                sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox"
                src="https://regale.cloud/thirdeye-data/play/3788/power-platform-employee-welcome-site-power-page-maker#/0/0"
                title="Employee Welcome Site"
              ></iframe>
            </div>
        </div>
        {/* /.container-fluid */}
      </div>
    </div>
  );
}
  

export default EmployeeWelcomeSite
