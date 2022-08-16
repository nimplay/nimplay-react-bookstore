import { Link } from 'react-router-dom';
import logo from '../user.png';

function NavBar() {
  return (
    <div className="header">
      <div className="subheader">
        <h1 className="header-title">Bookstore CMS</h1>
        <nav className="nav">
          <ul className="nav-ul">
            <li className="nav-li">
              <Link to="/" className="nav-link">Books</Link>
            </li>
            <li className="nav-li">
              <Link to="/categories" className="nav-link">Categories</Link>
            </li>
          </ul>
        </nav>
      </div>
      <img src={logo} alt="logo" className="logo" />
    </div>
  );
}

export default NavBar;
