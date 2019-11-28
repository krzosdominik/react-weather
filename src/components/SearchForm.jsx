import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const SearchForm = () => {
  const history = useHistory();
  const { city: cityParam, code: codeParam } = useParams();
  const [city, setCity] = useState(cityParam);
  const [code, setCode] = useState(codeParam);
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
    <>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label className="text-center">Podaj nazwę miasta</label>
          <input
            type="text"
            name="city"
            value={city}
            placeholder="Nazwa miasta"
            onChange={onCityChange}
            maxLength="15"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="text-center">Podaj kod kraju</label>
          <input
            type="text"
            name="code"
            value={code}
            placeholder="Kod kraju, np. pl"
            onChange={onCodeChange}
            maxLength="5"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-secondary">
          Pobierz dane
        </button>
      </form>
      {!isValid && (
        <div className="alert alert-danger mt-3">
          Nazwa miasta i kod kraju są wymagane do prawidłowego działania
          aplikacji!
        </div>
      )}
    </>
  );
};

export default SearchForm;
