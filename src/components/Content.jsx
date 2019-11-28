import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CurrentWeather from './CurrentWeather';
import ForecastList from './ForecastList';
import Search from './Search';
import Navigation from './Navigation';

const Content = () => {
  return (
    <section>
      <Switch>
        <Route exact path="/">
          <Search />
        </Route>
        <Route path="/:city/:code/weather">
          <Search />
          <Navigation />
          <CurrentWeather />
        </Route>
        <Route path="/:city/:code/forecast">
          <Search />
          <Navigation />
          <ForecastList />
        </Route>
      </Switch>
    </section>
  );
};

export default Content;
