import React from "react";
import Powpages from '../assets/4. Microsoft Power Platform - Demo 1c - Copilot in Power Pages.mp4'

function CopilotInPowerPages() {
  return (
    // Content
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <div className="video-container">
          <video autoPlay muted controls>
            <source
              src={Powpages}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default CopilotInPowerPages;

