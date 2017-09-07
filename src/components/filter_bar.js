import React, { Component } from 'react';
import {Button, Navbar, FormGroup, FormControl} from 'react-bootstrap';
class FilterBar extends Component {
  constructor(...args) {
  super(...args);

  this.state = {
    filterTerm: ''
  };
      this.handleFilter = this.handleFilter.bind(this);
}

handleFilter(e){
  alert("moi")
  e.preventDefault;
  this.setState({filterTerm: e.target.value});
}
  render() {
    return (
        <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            {this.props.term}
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl type="text" placeholder="Filter" />
            </FormGroup>
            {' '}
            <Button onChange = {this.handleFilter} type="submit">Submit</Button>
          </Navbar.Form>
        </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default FilterBar;
