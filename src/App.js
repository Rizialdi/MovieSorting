import React, { Component } from 'react';
import JumboPresent from './components/jumbo_present';
import {Button, Navbar, FormGroup, FormControl} from 'react-bootstrap';
import Card from './components/card';
import preload from './dummy.json';
import './App.css';

class App extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
        filterTerm: '',
    };

      this._handleReset = this._handleReset.bind(this);
      this._handleChange = this._handleChange.bind(this);
  };

    _handleReset(e){
        e.preventDefault();
        this.setState({filterTerm: ''});
    }

    _handleChange(e){
        const filterTerm = e.target.value;
        this.setState({filterTerm})
    }

  render() {
    let card = preload.movies
        .filter(movie => `${movie.Title} ${movie.Plot}`.toUpperCase().indexOf(this.state.filterTerm.toUpperCase()) >= 0)
        .map(movie =>
                    <Card key = {movie.Title}
                          movie = {movie.Title}
                          release = {movie.Released}
                          country = {movie.Country}
                          poster = {movie.Poster}
                          website = {movie.Website}
                          plot = {movie.Plot} />);

    return (
        <div className="App">
            <JumboPresent />
            <Navbar>
                    <Navbar.Form>
                        <FormGroup>
                            <FormControl type="text" placeholder="Filter Term" value = {this.state.filterTerm} onChange = {this._handleChange} />
                        </FormGroup>
                        <Button onClick = {this._handleReset} type="submit">Reset</Button>
                    </Navbar.Form>
            </Navbar>
            {card}
        </div>
    );
  }


}

export default App;
