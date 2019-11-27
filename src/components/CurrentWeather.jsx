import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import moment from 'moment';
import 'moment/locale/pl.js';
import { capitalize } from 'lodash';

import '../style/CurrentWeather.css';

class CurrentWeather extends Component {
  render() {
    const { weather, error } = this.props;
    if (error) {
      return (
        <section className="alert alert-danger">
          <p className="error">
            Miasto o podanych parametrach nie istnieje. Upewnij się, że
            wprowadziłeś poprawne dane!
          </p>
        </section>
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
        <section className="alert alert-secondary weather text-center">
          <h1>Stan pogodowy na godz. {moment(weather.dt_txt).format('LT')}</h1>
          <figure className="d-flex justify-content-center">
            {icons.map(icon => (
              <img key={icon} src={icon} />
            ))}
          </figure>
          <h2 className="alert alert-light">
            {weather.weather.map(el => capitalize(el.description)).join(' / ')}
          </h2>
          <table className="table table-striped">
            <tbody>
              <tr>
                <th scope="row">Temperetura</th>
                <td className='font-weight-bold'>{weather.main.temp} ℃</td>
              </tr>
              <tr>
                <th scope="row">Wilgotność</th>
                <td className='font-weight-bold'>{weather.main.humidity} %</td>
              </tr>
              <tr>
                <th scope="row">Ciśnienie</th>
                <td className='font-weight-bold'>{weather.main.pressure} hPa</td>
              </tr>
              <tr>
                <th scope="row">Zachmurzenie</th>
                <td className='font-weight-bold'>{weather.clouds.all} %</td>
              </tr>
              <tr>
                <th scope="row">Siła wiatru</th>
                <td className='font-weight-bold'>{(weather.wind.speed * 0.36).toFixed(2)} km/h</td>
              </tr>
            </tbody>
          </table>
        </section>
      </>
    );
  }
}

export default CurrentWeather;
