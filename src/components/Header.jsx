import React from 'react';
import { Link } from 'react-router-dom';

import SearchForm from './SearchForm';

const Header = ({ formVisible }) => {
  return (
    <header className="navbar navbar-dark bg-secondary d-flex justify-content-around">
      <Link
        to="/"
        className="navbar-brand pl-4"
        style={{ fontFamily: 'Lobster', fontSize: '1.5rem' }}
      >
        <img src="http://openweathermap.org/img/wn/11n.png" alt="logo" />
        <span>Pogodynka</span>
      </Link>
      {formVisible && <SearchForm />}
    </header>
  );
};

export default Header;
