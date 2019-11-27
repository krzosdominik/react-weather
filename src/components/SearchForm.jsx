import React, { Component } from 'react';

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
        <form onSubmit={this.onFormSubmit} className="">
            <div className="form-group">
              <label className="text-center">Podaj nazwę miasta</label>
              <input
                type="text"
                name="city"
                value={this.state.city}
                placeholder="Warszawa"
                onChange={this.onInputChange}
                maxLength="15"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label className="text-center">Podaj kod kraju</label>
              <input
                type="text"
                name="code"
                value={this.state.code}
                placeholder="PL"
                onChange={this.onInputChange}
                maxLength="2"
                className="form-control"
              />
            </div>
          <button type="submit" className="btn btn-secondary">
              Pobierz dane
            </button>
        </form>
      </>
    );
  }
}

export default SearchForm;
