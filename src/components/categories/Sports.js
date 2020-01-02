import React, { Component } from "react";
import Axios from "axios";
import ItemProps from "../items/itemProps";
import { Container, Card } from "semantic-ui-react";

export default class SportsPage extends Component {
  constructor() {
    super();

    this.state = {
      category: []
    };
  }
  query = new URLSearchParams(window.location.search);
  url = this.query.get("id");

  componentDidMount() {
    const id = this.url;
    Axios.get(`http://localhost:5000/api/category/${id}`)
      .then(res => {
        this.setState({ category: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    const cat = this.state.category;
    return (
      <Container>
        <Card.Group

          columns={3}
          centered
          style={{ paddingTop: "3em", paddingBottom: "5em" }}
        >
          {console.log(cat)}
          {cat.event &&
            cat.event.length > 0 &&
            cat.event.map(data => (
              <ItemProps
                style={{ paddingTop: "1em", paddingBottom: "1em" }}
                key={data.id}
                id={data.id}
                image={data.img}
                title={data.title}
                description={data.desc}
                price={data.price}
                date={data.start}
                color={data.color}
              />
            ))}
        </Card.Group>
      </Container>
    );
  }
}
