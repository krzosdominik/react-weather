import React, { Component } from 'react';
import { thisExpression } from '@babel/types';

class SearchForm extends Component {
  state = {
    city: '',
    code: '',
    isCityValid: undefined,
    isCodeValid: undefined
  };

  onInputChange = e => {
    this.props.onTyping(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onFormSubmit = e => {
    this.props.onSearch(e);
    this.isValid(this.state.city, this.state.code);
  };

  isValid = (city, code) => {
    if (city !== '' && code.length === 2) {
      this.setState({
        isCityValid: true,
        isCodeValid: true
      });
    } else {
      this.setState({
        isCityValid: false,
        isCodeValid: false
      });
    }
  };

  render() {
    return (
      <>
        <form onSubmit={this.onFormSubmit}>
          <label>
            Podaj nazwę miasta
            <input
              type="text"
              name="city"
              value={this.state.city}
              placeholder="Warszawa"
              onChange={this.onInputChange}
              maxLength="15"
            />
          </label>
          <label>
            Podaj kod kraju
            <input
              type="text"
              name="code"
              value={this.state.code}
              placeholder="PL"
              onChange={this.onInputChange}
              maxLength="2"
            />
          </label>
          <button type="submit">Pobierz dane</button>
        </form>
        {this.state.isCityValid === false &&
          this.state.isCodeValid === false && (
            <p style={{ color: 'red', fontWeight: 'bold' }}>
              Upewnij się, że wprowadziłeś poprawne dane!
            </p>
          )}
      </>
    );
  }
}

export default SearchForm;
