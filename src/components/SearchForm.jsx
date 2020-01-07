import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SearchForm = () => {
  const history = useHistory();
  const [city, setCity] = useState('');
  const [code, setCode] = useState('');
  const [isValid, setValid] = useState(true);

  const onCityChange = e => {
    setCity(e.target.value);
  };

  const onCodeChange = e => {
    setCode(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (city && code.length >= 2) {
      setValid(true);
      history.push(`/${city}/${code}/weather`);
    } else {
      setValid(false);
    }
  };

  return (
    <div className="text-center">
      <form
        onSubmit={onSubmit}
        class="form-inline d-flex justify-content-center"
      >
        <div className="form-group mb-2">
          <input
            type="text"
            name="city"
            value={city}
            placeholder="Podaj nazwę miasta"
            onChange={onCityChange}
            maxLength="15"
            className="form-control"
            style={{ marginLeft: '10px' }}
          />
        </div>
        <div className="form-group mb-2">
          <input
            type="text"
            name="code"
            value={code}
            placeholder="Podaj kod kraju, np. pl"
            onChange={onCodeChange}
            maxLength="5"
            className="form-control"
            style={{ marginLeft: '10px' }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-info mb-2"
          style={{ marginLeft: '10px' }}
        >
          Pobierz dane
        </button>
      </form>
      {!isValid && (
        <div className="alert alert-danger mt-3">
          Nazwa miasta i kod kraju są wymagane do prawidłowego działania
          aplikacji!
        </div>
      )}
    </div>
  );
};

export default SearchForm;
