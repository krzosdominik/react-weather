import moment from 'moment';
import { capitalize } from 'lodash';
import React from 'react';

const WeatherForecast = ({ city, forecast }) => {
  if (!forecast) {
    return null;
  }

  const icons = forecast.weather.map(
    el => `http://openweathermap.org/img/wn/${el.icon}@2x.png`
  );

  return (
    <section className="alert alert-secondary weather">
      <h1>
        <i className="fa fa-building-o" aria-hidden="true" /> {city}
      </h1>
      <h2>
        <i className="fa fa-clock-o" aria-hidden="true" />{' '}
        {moment(forecast.dt_txt)
          .locale('pl')
          .format('LT')}
      </h2>
      <figure className="d-flex justify-content-center">
        {icons.map(icon => (
          <img key={icon} src={icon} alt="weather icon" />
        ))}
      </figure>
      <h2 className="alert alert-light text-center">
        {forecast.weather.map(el => capitalize(el.description)).join(' / ')}
      </h2>
      <table className="table table-striped text-center">
        <tbody>
          <tr>
            <th scope="row">Temperetura</th>
            <td className="font-weight-bold">{forecast.main.temp} ℃</td>
          </tr>
          <tr>
            <th scope="row">Wilgotność</th>
            <td className="font-weight-bold">{forecast.main.humidity} %</td>
          </tr>
          <tr>
            <th scope="row">Ciśnienie</th>
            <td className="font-weight-bold">{forecast.main.pressure} hPa</td>
          </tr>
          <tr>
            <th scope="row">Zachmurzenie</th>
            <td className="font-weight-bold">{forecast.clouds.all} %</td>
          </tr>
          <tr>
            <th scope="row">Siła wiatru</th>
            <td className="font-weight-bold">
              {(forecast.wind.speed * 0.36).toFixed(2)} km/h
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default WeatherForecast;
