import React from 'react';

const Header = () => {
  return (
    <header className='mb-3'>
      <nav className="navbar navbar-dark bg-secondary d-flex justify-content-center">
        <a className="navbar-brand pl-4" style={{fontFamily: 'Lobster', fontSize: '1.5rem'}} href="/">
          <img src="http://openweathermap.org/img/wn/11n.png" alt='logo' />
          Pogodynka
        </a>
      </nav>
    </header>
  );
};

export default Header;
