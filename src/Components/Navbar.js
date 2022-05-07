import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import '../styles/navbar.css';

const Navbar = () => {
  const menuLinks = [
    {
      id: 1,
      path: '/allbooks',
      name: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      name: 'CATEGORIES',
    },
  ];

  return (
    <nav className="navbar flex-row">
      <div className="flex-row">
        <h1 id="logo" className="blueText">Bookstore CMS</h1>
        <ul id="menu" className="navmenu flex-row">
          {menuLinks.map((item) => (
            <li key={item.id}>
              <Link to={item.path}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="user">
        <FaUserAlt style={{
          color: '#0290ff',
          backgroundColor: '#fff',
          height: '1.0rem',
          cursor: 'pointer',
          position: 'relative',
        }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
