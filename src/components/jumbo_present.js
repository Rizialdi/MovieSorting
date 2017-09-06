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
            <p>Please choose a movie category and feel free to filter them.</p>
            <p><Button bsStyle="primary" onClick={ ()=> this.setState({ open: !this.state.open })} >About the author</Button></p>
              <Collapse in={this.state.open}>
                <div>
                  <Well>
                    Diack Rasselio Abou -- Rizialdi
                  <div>
                      <a href="http://rasselio-diack.me/" target="_blank" rel="noopener noreferrer"><Button className="fa fa-windows"></Button></a>
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
