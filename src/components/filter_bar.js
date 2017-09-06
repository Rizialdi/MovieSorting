import React, { Component } from 'react';
import {Button, Navbar, FormGroup, FormControl} from 'react-bootstrap';
class FilterBar extends Component {
  constructor(...args) {
  super(...args);

  this.state = {};
}

  render() {
    return (
        <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            Filter
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl type="text" placeholder="Filter" />
            </FormGroup>
            {' '}
            <Button type="submit">Submit</Button>
          </Navbar.Form>
        </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default FilterBar;
