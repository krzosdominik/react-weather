import React, { Component } from 'react';
import { NavLink, BrowserRouter, Switch, Route } from 'react-router-dom';

import SearchForm from './SearchForm';
import CurrentWeather from './CurrentWeather';
import WeatherForecastList from './WeatherForecastList';
import '../style/CurrentWeather.css'

const API_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = 'a56758b068e0436e0cacd6e5ef99693d';

class AppContent extends Component {
  state = {
    city: '',
    code: '',
    currentWeather: null,
    currentWeatherError: null,
    weatherForecast: [],
    weatherForecastError: null
  };

  handleInputChange = (name, value) => {
    this.setState(state => ({
      ...state,
      [name]: value
    }));
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.fetchCurrentWeather(API_URL, API_KEY);
    this.fetchWeatherForecast(API_URL, API_KEY);
  };

  fetchCurrentWeather = (url, key) => {
    const { city, code } = this.state;
    fetch(`${url}weather?q=${city},${code}&appid=${key}&units=metric&lang=pl`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then(data => {
        this.setState({
          currentWeather: data,
          currentWeatherError: null
        });
      })
      .catch(err => {
        this.setState({
          currentWeatherError: err
        });
      });
  };

  fetchWeatherForecast = (url, key) => {
    const { city, code } = this.state;
    fetch(`${url}forecast?q=${city},${code}&appid=${key}&units=metric&lang=pl`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then(data => {
        this.setState({
          weatherForecast: data.list,
          weatherForecastError: null
        });
      })
      .catch(err => {
        this.setState({
          weatherForecastError: err
        });
      });
  };

  render() {
    const { city, code } = this.state;
    const {
      currentWeather,
      weatherForecast,
      currentWeatherError,
      weatherForecastError
    } = this.state;
    return (
      <section className="flex">
        <SearchForm
          onTyping={this.handleInputChange}
          onSearch={this.handleFormSubmit}
        />
        <BrowserRouter>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <NavLink
                exact
                to={{pathname: '/', state: { city, code }}}
                activeClassName="active"
                className="nav-link"
              >
                Aktualna pogoda
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/forecast/:city,:code"
                activeClassName="active"
                className="nav-link"
              >
                Prognoza pogody
              </NavLink>
            </li>
          </ul>
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <CurrentWeather
                  city={this.state.city}
                  weather={currentWeather}
                  error={currentWeatherError}
                />
              )}
            />
            <Route
              path="/forecast"
              component={() => (
                <WeatherForecastList
                  className=""
                  items={weatherForecast}
                  error={weatherForecastError}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </section>
    );
  }
}

export default AppContent;
