import React, { Component } from "react";
import { Menu, Container } from "semantic-ui-react";
import Login from "./signUp/login";
import Dropmenu from "./dropdown/dropdown";
import { Link } from "react-router-dom";

export default class MenuNav extends Component {
  render() {
    const isToken = localStorage.getItem("token");

    return (
      <Menu size="small" stackable>
        <Container>
          <Menu.Item as={Link} to={"/"}>
            <h4>Dumbtick</h4>
          </Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item>
              {!isToken && <Login />}
              {isToken && <Dropmenu />}
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}
