import React, { Component } from "react";
import ItemProps from "../items/itemProps";
import { Container, Card } from "semantic-ui-react";
import {
  getIdCategories
} from "../../_actions/categories";
import { connect } from "react-redux";

class Sports extends Component {
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
    this.props.dispatch(getIdCategories(id));
  }

  render() {
    const cat = this.props.categories.data;

    return (
      <Container style={{ paddingTop: "3em", paddingBottom: "5em" }}>
        <Card.Group centered itemsPerRow={4} stackable>
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
              />
            ))}
        </Card.Group>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categoryDetails
  };
};

export default connect(mapStateToProps)(Sports);
