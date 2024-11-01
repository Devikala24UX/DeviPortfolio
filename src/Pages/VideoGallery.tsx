import React, { useState } from 'react';
import './VideoGallery.css';

function VideoGallery() {
  // useState hook to manage the current index of the displayed video
  const [index, setIndex] = useState(0);

  // Function to go to the next video in the gallery
  function goToNextVideo() {
    setIndex((prevIndex) => (prevIndex + 1));
  }

  // Function to go to the previous video in the gallery
  function goToPreviousVideo() {
    setIndex((prevIndex) => (prevIndex - 1));
  }

  return (
    <div className='mx-auto row'>
      <div className="col-12 video-gallery-container">
        <header className="video-gallery-header">
          <h1>Video Gallery</h1>
          <p>Explore our collection of videos showcasing various topics and projects.</p>
        </header>
        
        {/* Navigation buttons */}
        <div className="video-gallery-buttons">
          <button onClick={goToPreviousVideo} className="video-gallery-button">
            Previous
          </button>
          <button onClick={goToNextVideo} className="video-gallery-button">
            Next
          </button>
        </div>
      </div>
    </div>
    
  );
}

export default VideoGallery;
