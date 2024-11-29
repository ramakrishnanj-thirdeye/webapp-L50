import React from "react";
import Finale from '../assets/Microsoft Power Platform - L50 Demo - Finale Video (Updated).mp4'

function PowerPlatformFinale() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      {/* Main Content */}
      <div id="content">
        <div className="video-container">
          <video autoPlay muted controls>
            <source
              src={Finale}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default PowerPlatformFinale;
