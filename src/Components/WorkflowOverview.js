import React from 'react'
// Fix the image path - make sure it exactly matches your file name
// If your file has a space in it, either rename it to remove the space or use the exact name
import img from '../assets/L50-Overview diagram.png'  // This path must match your actual file location

function WorkflowOverview() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      {/* Main Content */}
      <div id="content">
        <div className="d-flex justify-content-center align-items-center vh-80">
          <div className="card-body d-flex justify-content-center align-items-center p-0">
            <img
              src={img}
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

export default WorkflowOverview