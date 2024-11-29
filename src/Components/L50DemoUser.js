import React from 'react'
import DemoVid from '../assets/1. Microsoft Power Platform - L50 Demo for User.mp4'

function L50DemoUser() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      {/* Main Content */}
      <div id="content">
        <div className="video-container">
          <video autoPlay muted controls>
            <source
              src={DemoVid}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default L50DemoUser
