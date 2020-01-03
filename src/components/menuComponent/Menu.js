import React, { Component } from "react";
import { Menu, Container, Image } from "semantic-ui-react";
import Login from "./signUp/login";
import Dropmenu from "./dropdown/dropdown";
import { Link } from "react-router-dom";
import SearchBar from "./search";

export default class MenuNav extends Component {
  render() {
    const isToken = localStorage.getItem("token");

    return (
      <Menu
        size="small"
        stackable
        secondary
        inverted
        fluid
        style={{ backgroundColor: "#FF5555" }}
      >
        <Container>
          <Menu.Item header as={Link} to={"/"}>
            <Image src="dumbtick.png" />
            Dumbtick
          </Menu.Item>
          
          <Menu.Menu position="right">
            <Menu.Item>
              <SearchBar />
            </Menu.Item>
          </Menu.Menu>
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
