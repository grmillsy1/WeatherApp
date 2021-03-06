import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props)

    this.state = { term: '' }
    //bind the contex of onInputChange
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }
  onFormSubmit(event){
    event.preventDefault()

    this.props.fetchWeather(this.state.term);
    this.setState({term : '' }) //this sets the state to empty string, so the search bar empties
  }
  render() {
    return (
      <form
      onSubmit={this.onFormSubmit}
      className="input-group">
        <input
          placeholder='Get a five-day forecast'
          className='form-control'
          value={this.state.term}
          onChange={this.onInputChange}
          />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar)
