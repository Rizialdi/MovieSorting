import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import JumboPresent from './components/jumbo_present';
import FilterBar from './components/filter_bar';
import './App.css';

class App extends Component {
  constructor(...args) {
  super(...args);

  this.state = {};
}

  render() {
    return (
      <div className="App">
        <JumboPresent />
        <Button bsStyle="primary">Query Api</Button>
        <FilterBar />
      </div>
    );
  }
}

export default App;
