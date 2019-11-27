import React, { Component } from 'react';
import { HashRouter, Route, Link, Switch, NavLink } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/pl.js';
import { capitalize } from 'lodash';

class WeatherForecast extends Component {
  render() {
    const { forecast } = this.props;

    if (!forecast) {
      return null;
    }

    const icons = forecast.weather.map(
      el => `http://openweathermap.org/img/wn/${el.icon}@2x.png`
    );

    const description = forecast.weather.map(el => el.description);

    return (
      <section className="alert alert-secondary weather">
        <h1>Godz.{' '}
            {moment(forecast.dt_txt)
              .locale('pl')
              .format('LT')}
        </h1>
        {icons.map(icon => (
          <img key={icon} src={icon} />
        ))}
        <h2>{capitalize(description)}</h2>
        <p>
          <strong>Temperetura:</strong>{' '}
          <span className="badge badge-info">{forecast.main.temp} ℃</span>
        </p>
        <p>
          <strong>Wilgotność:</strong>{' '}
          <span className="badge badge-info">{forecast.main.humidity} %</span>
        </p>
        <p>
          <strong>Ciśnienie:</strong>{' '}
          <span className="badge badge-info">{forecast.main.pressure} hPa</span>
        </p>
        <p>
          <strong>Zachmurzenie:</strong>{' '}
          <span className="badge badge-info">{forecast.clouds.all} %</span>
        </p>
        <p>
          <strong>Siła wiatru:</strong>{' '}
          <span className="badge badge-info">{forecast.wind.speed} m/s</span>
        </p>
      </section>
    );
  }
}

export default WeatherForecast;


