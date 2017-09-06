import React, { Component } from 'react';
import {Button, Grid, Row, Col, Thumbnail, thumbnaildiv} from 'react-bootstrap';

class Card extends Component {
  constructor(...args) {
  super(...args);

  this.state = {

  };
}

  render() {
    return (
        <Col xs={6} md={4}>
          <Thumbnail src={this.props.poster} alt={this.props.poster}>
            <h3>{this.props.movie}</h3>
            <p>{this.props.release}</p>
            <p>{this.props.country}</p>
            <p>
              <Button bsStyle="primary">More Info</Button>&nbsp;
              <Button bsStyle="default">Button</Button>
            </p>
          </Thumbnail>
        </Col>
    );
  }
}

export default Card;
