import React, { Component } from 'react';
import { capitalize, groupBy } from 'lodash';
import moment from 'moment';
import 'moment/locale/pl.js';

import WeatherForecast from './WeatherForecast';

class WeatherForecastList extends Component {
  state = {
    forecastByDay: null
  };

  componentDidMount() {
    const { items } = this.props;
    const forecastByDay = groupBy(items, ({ dt_txt }) => dt_txt.split(' ')[0]);

    this.setState({
      forecastByDay: Object.entries(forecastByDay)
    });
  }

  render() {
    const { items, error } = this.props;
    const { forecastByDay } = this.state;

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

    if (forecastByDay) {
      return forecastByDay.map(([day, forecast]) => (
        <div key={day}>
          <h1 className="badge-dark rounded" style={{textAlign: 'center'}}>
            {capitalize(
              moment(day)
                .locale('pl')
                .format('dddd')
            )}
          </h1>
          {forecast.map(item => (
            <WeatherForecast key={item.dt_txt} forecast={item} />
          ))}
        </div>
      ));
    }

    return null;
  }
}

export default WeatherForecastList;
