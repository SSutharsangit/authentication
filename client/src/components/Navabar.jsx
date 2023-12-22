import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link,useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch} from 'react-redux';
import { logout} from '../redux/Userslice'

function Navbar() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
    const currentUser = useSelector((state) => state.user.currentUser);
    const handleSignOut = () => {
      
      dispatch(logout());
      navigate("/Signin")

    };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container d-flex justify-content-between mx-auto">
        <Link to="/">
        <a className="navbar-brand" href="#">
          facebook
        </a>
        </Link>
       
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-2">
                <Link to="/">
                <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
                </Link>
              
            </li>
            <Link to="/About">
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            </Link>
            {currentUser ? (
              <>
                <li className="nav-item mx-2">
                  {/* Display the profile picture */}
                  <img
                    src={currentUser.profile} // Add the correct field for the profile picture
                    alt="Profile"
                    className="rounded-circle"
                    style={{ width: '30px', height: '30px', objectFit: 'cover' }}
                  />
                </li>
                <li className="nav-item mx-2">
                  {/* Display the username or some user information */}
                  <span className="nav-link">{currentUser.username}</span>
                </li>
              
                <li className="nav-item mx-2">
                  {/* Add the logout button */}
                  <button type="button" className="btn btn-primary" onClick={handleSignOut}>
                    Sign out
                  </button>
                </li>
                
              </>
            ) : (
              <li>
                <Link to="/Signin">
                  <button type="button" className="btn btn-primary mx-2">
                    Sign in
                  </button>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
