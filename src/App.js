import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import JumboPresent from './components/jumbo_present';
import FilterBar from './components/filter_bar';
import Card from './components/card';
import Modaldef from './components/modal'
import preload from './dummy.json';
import './App.css';
const imdb = require('imdb-api');

class App extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      movie_title: "Django",
      release: 2006,
      country: "USA"
    };
    //On met ici cette commande pour faire un bind au nivo du constructeur et c'est parti pour la session
    this.query.bind(this)
}

componentWillMount() {
  // imdb.get('game', {apiKey: '19021629', timeout: 30})
  // .then(x => {this.setState({movie_title: x.title}); console.log(x.title);})
  // .catch(console.log);
  // this.setState({
  //   movie_title: "Relo",
  //   release_date: 2006,
  //   country: "USA"
  // });
}

  render() {
    let card = preload.movies.map(movie => <Card movie = {movie.title} release = {movie.released} country = {movie.country} poster = {movie.poster} key = {movie.title}/>);
    return (
      <div className="App">
        <JumboPresent />
        <Button bsStyle="primary" onClick={this.query}>Query Api</Button>
        <FilterBar />
        <Modaldef />
        {card}
    </div>
    );
  }

  query(){
    imdb.get('The Toxic Avenger', {apiKey: '19021629', timeout: 30}).then(x => this.setState({movie_title: x.title})).catch(console.log);
  }
}

export default App;
