import 'bootstrap/dist/css/bootstrap.css'; // Importing Bootstrap CSS for responsive layout and predefined styles
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Import Bootstrap JavaScript bundle (including Popper)
import {Link} from'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
import About from './Pages/About';
import './App.css'
import './NavBar';
import './NavBar.css';
import Gallery from './Pages/PhotoGallery';
import VideoGallery from './Pages/VideoGallery';
import Home from './Pages/Home';
import Project1 from './Pages/Project1';
import Project2 from './Pages/Project2';
import Project3 from './Pages/Project3';





function App(){
  return (
    <div>
      <nav>
        <ul className="navbar">
          <div className='navbar-logo'>
            <div className='logo-container'>
            D'kala Art
            </div>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Project">Project</Link></li>
            <li><Link to="/Gallery">Photo Gallery</Link></li>
            <li><Link to="VideoGallery">Video Gallery</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </div>
        </ul>
      </nav>
      <Routes>
        <Route path="/About"element={<About/>} />
        <Route path="/Project"element={<Project/>} />
        <Route path="/Contact"element={<Contact/>} />
        <Route path="/Gallery"element={<Gallery/>}/>
        <Route path="/VideoGallery"element={<VideoGallery/>}/>
        <Route path="/Home"element={<Home/>}/>
        <Route path="/"element={<Home/>}/>
        <Route path="/Project1"element={<Project1/>}/>
        <Route path="/Project2"element={<Project2/>}/>
        <Route path="/Project3"element={<Project3/>}/>

      </Routes>
      <footer className="footer"> {/* Footer section */}
      </footer>
    </div>
  );
}
export default App
