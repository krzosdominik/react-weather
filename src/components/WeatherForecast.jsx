import React from 'react';

import WeatherDetails from './WeatherDetails';
import CityInfo from './CityInfo';
import WeatherIcon from './WeatherIcon';

const WeatherForecast = ({ city, forecast }) => {
  if (!forecast) {
    return null;
  }

  return (
    <div className="alert alert-secondary weather">
      <CityInfo city={city} weather={forecast} />
      <WeatherIcon weather={forecast.weather} />
      <WeatherDetails data={forecast} />
    </div>
  );
};

export default WeatherForecast;
