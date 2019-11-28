import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CurrentWeather from './CurrentWeather';
import ForecastList from './ForecastList';
import SearchForm from './SearchForm';
import Navigation from './Navigation';

const Content = () => {
  return (
    <section>
      <Switch>
        <Route exact path="/">
          <SearchForm />
        </Route>
        <Route path="/:city/:code/weather">
          <SearchForm />
          <Navigation />
          <CurrentWeather />
        </Route>
        <Route path="/:city/:code/forecast">
          <SearchForm />
          <Navigation />
          <ForecastList />
        </Route>
      </Switch>
    </section>
  );
};

export default Content;
