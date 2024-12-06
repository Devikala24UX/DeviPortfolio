import { Link } from 'react-router-dom';
//import logo from './assets/Devi logo.png';
function NavBar() {
  return (
    <nav>
      <ul className="navbar">
  


        <li><Link to="/about">About</Link></li>
        <li><Link to="/project">Project</Link></li>
        <li><Link to="/contact">Contact</Link></li> 
      </ul>
    </nav>
  );
}

export default NavBar;