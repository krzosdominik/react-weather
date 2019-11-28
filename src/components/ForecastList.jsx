import { capitalize, groupBy } from 'lodash';
import moment from 'moment';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import API from '../methods/API';
import WeatherForecast from './WeatherForecast';

const ForecastList = () => {
  const { city, code } = useParams();
  const [forecastByDay, setForecastByDay] = useState(null);
  const [forecastError, setForecasterror] = useState(null);

  useEffect(() => {
    API.fetchForecast(city, code)
      .then(({ list }) => {
        const groupedForecast = groupBy(
          list,
          ({ dt_txt }) => dt_txt.split(' ')[0]
        );
        setForecastByDay(Object.entries(groupedForecast));
      })
      .catch(error => setForecasterror(error));
  }, [city, code]);

  if (forecastError) {
    return (
      <div className="alert alert-danger">
        Ups, wystąpił problem. Sprawdź poprawność wpisanych danych lub
        połączenie z siecią!
      </div>
    );
  }

  if (forecastByDay) {
    return forecastByDay.map(([day, forecast]) => (
      <div key={day}>
        <h1 className="badge-dark rounded text-center">
          {capitalize(
            moment(day)
              .locale('pl')
              .format('dddd')
          )}
        </h1>
        {forecast.map(item => (
          <WeatherForecast key={item.dt_txt} forecast={item} city={city} />
        ))}
      </div>
    ));
  }

  return null;
};

export default ForecastList;
