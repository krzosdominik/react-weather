import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="mb-3">
      <nav className="navbar navbar-dark bg-secondary d-flex justify-content-center">
        <Link
          to="/"
          className="navbar-brand pl-4"
          style={{ fontFamily: 'Lobster', fontSize: '1.5rem' }}
        >
          <img src="http://openweathermap.org/img/wn/11n.png" alt="logo" />
          <span>Pogodynka</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
