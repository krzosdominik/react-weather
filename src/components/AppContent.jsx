import React, { Component } from 'react';

import SearchForm from './SearchForm';
import CurrentWeather from './CurrentWeather';
import WeatherForecast from './WeatherForecast';

class AppContent extends Component {
  state = {
    city: '',
    code: ''
  };

  handleInputChange = (name, value) => {
    this.setState(state => ({
      ...state,
      [name]: value
    }));
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <>
        <SearchForm onTyping={this.handleInputChange} onSearch={this.handleFormSubmit} />
        <CurrentWeather city={this.state.city} code={this.state.code} />
        <WeatherForecast />
      </>
    );
  }
}

export default AppContent;
