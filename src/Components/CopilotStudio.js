import React from 'react'

function Copilotstudio() {
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
                src="https://regale.cloud/thirdeye-data/play/3777/power-platform-copilot-studio-maker#/0/0"
                title="Copilot Studio Demo"
              ></iframe>
            </div>
          </div>
        {/* /.container-fluid */}
      </div>
    </div>
  );
}

export default Copilotstudio

