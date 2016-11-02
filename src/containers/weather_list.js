import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name
    //pull off an array of temperatures
    const temps = cityData.list.map(weather => weather.main.temp) //this will return the temp of each section in the list of temps for that city

    return(
      <tr key={name}>
        <td> {name}</td>
        <td>
          <Sparklines height={120} width={180} data={temps}>
            <SparklinesLine color="red" />
          </Sparklines>
        </td>
      </tr>
    )
  }

  render() {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature </th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>

    );
  }
}

function mapStateToProps({ weather }) {
  return { weather } // ES6 syntax { weather } == {weather: weather}
}

export default connect(mapStateToProps)(WeatherList);
