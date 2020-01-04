import React, { Component } from "react";
import Category from "./category";
import ItemCard from "../items/item";
import { Container, Header, Item} from "semantic-ui-react";


export default class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1 style={{ color: "red",paddingTop:'1em',paddingBottom:'1em'}}>Category</h1>
          <Category />
        </Container>
        <Container>
          <h1 style={{ color: "red",paddingTop:'2em'}}>Today Event</h1>
          <ItemCard />
        </Container>
        <Container>
          <Header color='red' style={{paddingTop:'2em'}}>
            Upcoming Event
          </Header>
          <ItemCard/>
        </Container>
      </div>
    );
  }
}
