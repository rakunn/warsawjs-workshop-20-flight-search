import React, { Component } from 'react';
import './App.css';
import SearchView from './SearchView';
import FlightsView from './FlightsView';

class App extends Component {

  state = {
      flightData: {},
      view: "search" //current view
  }

  onSearchSubmit = (flightData) => {
    this.setState({
      flightData,
      view: "flights"
    });
    console.log(flightData);
  }

  render() {
    return (
      <div>
      {
        this.state.view === "search" 
        ? (<SearchView onAppSubmit = { this.onSearchSubmit }/>) 
        : <FlightsView flightData = { this.state.flightData } />
      }
      </div>
    );
  }
}

export default App; // no destructuring needed when default is set
