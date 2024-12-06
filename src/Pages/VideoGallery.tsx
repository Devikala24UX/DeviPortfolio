import './VideoGallery.css';
//import BackTrackVideo from '../assets/video gallery/BackTrackVideoFinal.mp4';
import GalleryImage1 from '../assets/video gallery/IMG_9180.jpg';
import GalleryImage2 from '../assets/video gallery/IMG_9227.jpg';
import GalleryImage3 from '../assets/video gallery/5cb84739-cc76-4ab6-9e48-4de3e6459866.jpg';
import tt from '../assets/IMG_9447.jpg';

function VideoGallery() {
  return (
    <div className="video-gallery-wrapper">
      <div className="video-gallery-header">
        <h1>About this Video</h1>
        <p>This promotional video highlights the BackTrack App, a tool designed to rediscover Ireland's forgotten historical sites. The app focuses on places like abandoned mansions and other hidden landmarks, with a hint of mystery and adventure. The video was filmed at Cullane House, a historic and eerie location, perfect for the app's theme. The logo, featuring red and black, reflects the thrilling and spooky vibe of the project.
        </p>
      </div>
      <p>To create the video, we first visited the location for a trial shoot to test ideas and explore the spot. On the main filming day, we arrived early to capture everything in daylight before dark in the winter evening. The result is a mix of adventure and creativity, bringing the concept of the app to life.
      </p>
      <div>
        <h1>Team Statement and Contributions:</h1>
        <p>Our team of five worked closely to make this project a success:</p>
        <div></div>
        <p>- Keelan and I acted in the video, with my passion for expressions and acting bringing the scenes to life.</p>
        <p>- Maya, our videographer and editor, captured and polished the video to perfection.</p>
        <p>- Nikitha ensured the continuity between shots, keeping the flow smooth and consistent.</p>
        <p>- Shreya managed the lighting to enhance the mood and setting.</p>
        <p>- Keelan also directed the video, shaping its overall vision.</p>
        <p>- I focused on sound during filming and designed the logo, which reflects the app's adventurous and mysterious theme.</p>
      </div>
      <div>
        <h3>Reflections:</h3>
        <p>Filming at Cullane House was an exciting and unforgettable experience. Walking through the spooky surroundings and exploring the area added a real sense of adventure to the project. This video brought our team's creativity together and perfectly represents the BackTrack App as a gateway to Ireland’s lost history, combining mystery and exploration.</p>
      </div>

      {/* <div className="video-section">
        <video className="featured-video" controls>
          <source src={BackTrackVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
      </div> */}

      <div className="embedded-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/8QfARZB7jtg?si=qDxiQ4ucgyanxL6d"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

      <div className="image-gallery">
        <h2>Gallery Images</h2>
        <div className="image-grid">
          <img src={GalleryImage1} alt="Gallery Image 1" className="gallery-image" />
          <img src={GalleryImage2} alt="Gallery Image 2" className="gallery-image" /> 
          <img src={GalleryImage3} alt="Gallery Image 3" className="gallery-image" /> 
          <img src={tt} alt="Gallery Image 4" className="gallery-image" />
        </div>
      </div>
    </div>
  );
}

export default VideoGallery;
