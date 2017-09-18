import React, { Component } from 'react';
import {Button, Col, Modal} from 'react-bootstrap';
import '../App.css';

const APIKEY = 'AIzaSyDW8a38P22Dhnu5KcZiSiY49zJYpwmZeMM';
const MAXRESULTS = 1;
const TYPE = 'video';
const PART = 'snippet';

class Card extends Component {
  constructor(...args) {
  super(...args);
  this.state = {
    showModal: false,
    embed: ''
  };
  this.open = this.open.bind(this);
  this.close = this.close.bind(this);
}

close() {
  this.setState({ showModal: false });
}

open() {
  this.setState({ showModal: true });

  function foo(movie, date){
    return `https://www.googleapis.com/youtube/v3/search?type=${TYPE}&maxResults=${MAXRESULTS}&part=${PART}&key=${APIKEY}&q=${movie}+${date}+trailer`
  };

  fetch(foo(this.props.movie, this.props.release))
     .then((response) => response.json())
     .then((responseJson) => {
       const embed = responseJson.items.map(obj => 'https://www.youtube.com/embed/'+obj.id.videoId);
       this.setState({embed});
     })
     .catch((error) => {
       console.error(error);
     });
}

  render() {
    return (
      <div>
        <Col xs={12} sm={6} md={4}>
          <div className="thumbnail">
              <img src={this.props.poster} alt={this.props.poster}/>
            <h3>{this.props.movie}</h3>
            <p>{this.props.release}</p>
            <p>{this.props.country}</p>
            <p>
              <Button
                bsStyle="primary"
                // bsSize="large"
                onClick={this.open}
              >
                More Info
              </Button>
              <a href={this.props.website} target="_blank">
              <Button
                  bsStyle="default"
              >
                Website
              </Button></a>
            </p>
          </div>
        </Col>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title bsSize="Large">{this.props.movie}</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <h4>Movie Description</h4>
            <p>{this.props.plot}</p>

            <hr />

            <h4>Movie Trailer</h4>
            <iframe title={this.props.plot} width="560" height="315" src={this.state.embed} frameBorder="0" allowFullScreen></iframe>

            </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Card;
