import React from 'react'
import dashboardimg from '../assets/Boulder_dashboard.png'

function Home() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      {/* Main Content */}
      <div id="content">
        <div className="d-flex justify-content-center align-items-center vh-80">
          <div className="card-body d-flex justify-content-center align-items-center p-0">
            <img src={dashboardimg}
              alt="diagram"
              className="img-fluid"
              style={{ height: "calc(100vh - 56px)", width: "100%", objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home