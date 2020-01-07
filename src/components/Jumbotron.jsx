import React from 'react';

import SearchForm from './SearchForm';

const Jumbotron = () => {
  return (
    <div
      className="jumbotron text-center"
      style={{
        marginTop: '15px',
        minHeight: '80vh'
      }}
    >
      <h2 className="display-4">Witaj w aplikacji pogodowej</h2>
      <p className="h1 text-info" style={{ fontFamily: 'Lobster' }}>
        Pogodynka
      </p>
      <hr className="my-4" />
      <p className="lead">Wprowadź dane i sprawdź pogodę dla Twojego miasta.</p>
      <SearchForm />
    </div>
  );
};

export default Jumbotron;
