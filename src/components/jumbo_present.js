import React, { Component } from 'react';
import {Button, Jumbotron, Collapse, Well} from 'react-bootstrap';

class JumboPresent extends Component {
  constructor(...args) {
  super(...args);

  this.state = {};
}

  render() {
    return (
      <div className="App">

          <Jumbotron>
            <h1>Movie Sorting!</h1>
            <p>Please choose a movie or feel free to filter them first.</p>
            <p><Button bsStyle="primary" onClick={ ()=> this.setState({ open: !this.state.open })} >About the author</Button></p>
              <Collapse in={this.state.open}>
                <div>
                  <Well>
                    Diack Rasselio Abou -- Rizialdi
                  <div>
                      <a href="https://github.com/Rizialdi" target="_blank" rel="noopener noreferrer"><Button className="fa fa-github"></Button></a>
                      <a href="https://www.linkedin.com/in/rasselio-diack/" target="_blank" rel="noopener noreferrer"><Button className="fa fa-linkedin"></Button></a>
                      <a href="https://www.facebook.com/rasselio.abou" target="_blank" rel="noopener noreferrer"><Button className="fa fa-facebook"></Button></a>
                  </div>
                  </Well>
                </div>
              </Collapse>
        </Jumbotron>
      </div>
    );
  }
}

export default JumboPresent;
