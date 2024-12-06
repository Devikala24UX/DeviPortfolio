import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Import components
import Home from './Pages/Home';
import About from './Pages/About';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
import Gallery from './Pages/PhotoGallery';
import VideoGallery from './Pages/VideoGallery';
import Project1 from './Pages/Project1';
import Project2 from './Pages/Project2';
import Project3 from './Pages/Project3';
import BlogPage from './Pages/BlogPage'; // Correct naming for BlogPage
import logo from './assets/Devi logo.png';

// Import styles
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import './NavBar.css';

const App: React.FC = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav>
        <ul className="navbar">
          <div className="navbar-logo">
            {/* <div className="logo-container">D'kala Art</div> */}
            <div className="logo-container">
  <img src={logo} alt="Logo" />
</div>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Project">Project</Link></li>
            <li><Link to="/Gallery">Photo Gallery</Link></li>
            <li><Link to="/VideoGallery">Video Gallery</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </div>
        </ul>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/DeviPortfolio" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/VideoGallery" element={<VideoGallery />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/blog" element={<BlogPage />} /> {/* Correct BlogPage */}
        <Route path="/Project1" element={<Project1 />} />
        <Route path="/Project2" element={<Project2 />} />
        <Route path="/Project3" element={<Project3 />} />
      </Routes>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 D'kala Art. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
