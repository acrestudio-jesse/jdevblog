import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = ({ isAuth, signOut }) => {
  return (
    <div className='nav-bar-container'>
      <div className="nav-bar">
  
          <Link className="nav-link" to="/">
            Home
          </Link>

       
          {!isAuth ? (
            <Link className="nav-link" to="/login">
              Login
            </Link>
          ) : (
            <>
            <Link className="nav-link" to="/create-post">
            Create Post
          </Link>
            <div className="nav-link" onClick={signOut}>
              Logout
            </div>
            </>
          )}
        
      </div>
    </div>
  );
};

export default NavBar;
