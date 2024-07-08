import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, FormGroup, Input, Button } from 'reactstrap';

export default class Navi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <Navbar color="light" light expand="lg">
        <NavbarBrand href="#">Navbar</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="active">
              <NavLink href="#">Home <span className="sr-only">(current)</span></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Dropdown
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Action
                </DropdownItem>
                <DropdownItem>
                  Another action
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Something else here
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="#" disabled>Disabled</NavLink>
            </NavItem>
          </Nav>
          <Form className="form-inline my-2 my-lg-0">
            <FormGroup>
              <Input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <Button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</Button>
            </FormGroup>
          </Form>
        </Collapse>
      </Navbar>
    );
  }
}
