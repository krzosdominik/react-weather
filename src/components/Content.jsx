import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import CurrentWeather from './CurrentWeather';
import ForecastList from './ForecastList';
import Jumbotron from './Jumbotron';
import Navigation from './Navigation';

const Content = () => {
  return (
    <section>
      <Switch>
        <Route exact path="/">
          <Header formVisible={false} />
          <div className="container">
            <Jumbotron />
          </div>
        </Route>
        <Route path="/:city/:code/weather">
          <Header formVisible={true} />
          <div className="container">
            <Navigation />
            <CurrentWeather />
          </div>
        </Route>
        <Route path="/:city/:code/forecast">
          <Header formVisible={true} />
          <div className="container">
            <Navigation />
            <ForecastList />
          </div>
        </Route>
      </Switch>
    </section>
  );
};

export default Content;
