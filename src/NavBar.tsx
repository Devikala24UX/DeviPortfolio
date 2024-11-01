import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <nav>
      <ul className="navbar">
        <div className="navbar-logo">
          <span>D'kala Art</span>
        </div>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/project">Project</Link></li>
        <li><Link to="/contact">Contact</Link></li> 
      </ul>
    </nav>
  );
}

export default NavBar;