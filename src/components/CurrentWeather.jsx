import moment from 'moment';
import { capitalize } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import API from '../methods/API';
import WeatherDetails from './WeatherDetails';
import CityInfo from './CityInfo';
import WeatherIcon from './WeatherIcon';

const CurrentWeather = () => {
  const { city, code } = useParams();
  const [weather, setWeather] = useState(null);
  const [weatherError, setWeatherError] = useState(null);

  useEffect(() => {
    API.fetchWeather(city, code)
      .then(data => setWeather(data))
      .catch(error => setWeatherError(error));
  }, [city, code]);

  if (weatherError) {
    return (
      <div className="alert alert-danger">
        Ups, wystąpił problem. Sprawdź poprawność wpisanych danych lub
        połączenie z siecią!
      </div>
    );
  }

  if (!weather) {
    return null;
  }

  return (
    <>
      <section>
        <h1 className="badge-dark rounded text-center">
          {capitalize(moment(weather.dt_txt).format('dddd'))}
        </h1>
        <div className="alert alert-secondary weather">
          <CityInfo weather={weather} city={city} />
          <WeatherIcon weather={weather.weather} />
          <WeatherDetails data={weather} />
        </div>
      </section>
    </>
  );
};

export default CurrentWeather;
