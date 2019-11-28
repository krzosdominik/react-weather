import moment from 'moment';
import { capitalize } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import API from '../methods/API';

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

  const icons = weather.weather.map(
    el => `http://openweathermap.org/img/wn/${el.icon}@2x.png`
  );

  return (
    <>
      <h1 className="badge-dark rounded" style={{ textAlign: 'center' }}>
        {capitalize(moment(weather.dt_txt).format('dddd'))}
      </h1>
      <section className="alert alert-secondary weather">
        <h1>
          <i className="fa fa-building-o" aria-hidden="true" /> {weather.name}
        </h1>
        <h2>
          <i className="fa fa-clock-o" aria-hidden="true" />{' '}
          {moment(weather.dt_txt).format('LT')}
        </h2>
        <figure className="d-flex justify-content-center">
          {icons.map(icon => (
            <img key={icon} src={icon} alt="weather icon" />
          ))}
        </figure>
        <h2 className="alert alert-light text-center">
          {weather.weather.map(el => capitalize(el.description)).join(' / ')}
        </h2>
        <table className="table table-striped text-center">
          <tbody>
            <tr>
              <th scope="row">Temperetura</th>
              <td className="font-weight-bold">{weather.main.temp} ℃</td>
            </tr>
            <tr>
              <th scope="row">Wilgotność</th>
              <td className="font-weight-bold">{weather.main.humidity} %</td>
            </tr>
            <tr>
              <th scope="row">Ciśnienie</th>
              <td className="font-weight-bold">{weather.main.pressure} hPa</td>
            </tr>
            <tr>
              <th scope="row">Zachmurzenie</th>
              <td className="font-weight-bold">{weather.clouds.all} %</td>
            </tr>
            <tr>
              <th scope="row">Siła wiatru</th>
              <td className="font-weight-bold">
                {(weather.wind.speed * 0.36).toFixed(2)} km/h
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default CurrentWeather;
