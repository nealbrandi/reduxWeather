import React from 'react';
import { Component } from 'react';

import SearchBar   from '../containers/searchBar';
import WeatherList from '../containers/weatherList';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
