import React from 'react'
import WorVid from '../assets/3. Microsoft Power Platform - Demo 1b - Copilot Studio.mp4'

function CopilotStudioWorking() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      {/* Main Content */}
      <div id="content">
        <div className="video-container">
          <video autoPlay muted controls>
            <source
              src={WorVid}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default CopilotStudioWorking
