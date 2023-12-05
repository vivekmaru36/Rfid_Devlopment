<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (index) => {
    setActiveLink(index === activeLink ? null : index);
  };

  return (
    <nav>
      <ul>
        <li>
          <Link
            to="/"
            onClick={() => handleLinkClick(0)}
            className={activeLink === 0 ? 'active' : ''}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            onClick={() => handleLinkClick(1)}
            className={activeLink === 1 ? 'active' : ''}
          >
            About us
          </Link>
        </li>
        <li>
          <Link
            to="/signup"
            onClick={() => handleLinkClick(2)}
            className={activeLink === 2 ? 'active' : ''}
          >
            Signup
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            onClick={() => handleLinkClick(3)}
            className={activeLink === 3 ? 'active' : ''}
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/registration"
            onClick={() => handleLinkClick(4)}
            className={activeLink === 4 ? 'active' : ''}
          >
            Registration
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
=======
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/registration">Registration</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
>>>>>>> 615d3f24881930491b6da80b834ca16a6556b355
