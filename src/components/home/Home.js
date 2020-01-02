import React, { Component } from "react";
import Category from "./category";
import ItemCard from "../items/item";
import { Container} from "semantic-ui-react";


export default class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1 style={{ color: "red",paddingTop:'1em',paddingBottom:'1em'}}>Category</h1>
          <Category />
        </Container>
        <Container>
          <h1 style={{ color: "red",paddingTop:'2em'}}>Today</h1>
          <ItemCard />
        </Container>
      
      </div>
    );
  }
}
