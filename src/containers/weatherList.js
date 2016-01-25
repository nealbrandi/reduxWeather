import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/sparkChart';
import GoogleMap from '../components/googleMap';

class WeatherList extends Component {

  constructor(props) {
    super(props);
    this.renderWeather = this.renderWeather.bind(this);
  }

  renderWeather(cityData) {
    const name       = cityData.city.name;
    const {lon, lat} = cityData.city.coord;
    const temps      = cityData.list
                        .map(weather => weather.main.temp)
                        .map(kelvin  => Math.round((kelvin - 273.15) * 1.8 + 32));
    const pressures  = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color='orange' units='F' /></td>
        <td><Chart data={pressures} color='blue' units='hPa'/></td>
        <td><Chart data={humidities} color='black' units='%' /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
