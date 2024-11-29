import React from 'react'

function ReduceCostAndRisk() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      {/* Main Content */}
      <div id="content">
        {/* Begin Page Content */}
        <div className="container-fluid">
            <div className="card-body d-flex justify-content-center align-items-center p-0">
              <iframe
                id="demoframe"
                style={{ height: "calc(100vh - 56px)", width: "100%" }}
                sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox"
                src="https://regale.cloud/thirdeye-data/play/3776/power-platform-reduce-cost-and-risk-maker#/0/0"
                title="Power Platform Reduce Cost and Risk"
              ></iframe>
            </div>
        </div>
        {/* /.container-fluid */}
      </div>
    </div>
  );
}

export default ReduceCostAndRisk;
