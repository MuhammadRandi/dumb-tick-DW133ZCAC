import React, { Component } from "react";
import {
  Grid,
  Header,
  Button,
  Icon,
  Container,
  Label
} from "semantic-ui-react";
import Axios from "axios";

export default class OrderCounter extends Component {
  state = {
    price: 1,
    active: false
  };

  query = new URLSearchParams(window.location.search);
  url = this.query.get("id");

  handleBuy = e => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const eventId = this.url;
    const userId = localStorage.getItem("id");
    const qty = this.state.price;
    const total = this.state.price * this.props.price;

    if (token) {
      Axios.post("https://dumb-tick-api.herokuapp.com/api/order", {
        eventId,
        userId,
        qty,
        total
      })
        .then(res => {
          if (res.data) {
            alert("Order success");
            window.location.href = `/payment/?id=${userId}`;
          } else {
            this.setState({ errMessage: res.data.message });
          }
        })
        .catch(err => this.setState({ error: err }));
    } else {
      alert("You need to login first");
    }
  };

  handleWishlist = e => {
    this.setState(prevState => ({ active: !prevState.active }));
    e.preventDefault();

    const token = localStorage.getItem("token");
    const eventId = this.url;
    const userId = localStorage.getItem("id");

    if (token) {
      Axios.post("https://dumb-tick-api.herokuapp.com/api/wishlist", {
        eventId,
        userId
      })
        .then(res => {
          if (res.data) {
            alert("added to wishlist")
          } else {
            this.setState({ errMessage: res.data.message });
          }
        })
        .catch(err => this.setState({ error: err }));
    } else {
      alert("You need to login first");
    }
  };

  increment = () => {
    this.setState({ price: this.state.price + 1 });
  };
  decrement = () => {
    const prices = this.state.price;
    this.state.price > 2
      ? this.setState({ price: prices - 1 })
      : this.setState({ price: 1 });
  };

  render() {
    const total = this.state.price * this.props.price;
    const error = this.state.error;
    const active = this.state.active
    return (
      <Container>
        <Grid.Row>
          <Grid.Column></Grid.Column>
          <Grid.Column floated="right">
            <Button
              color="green"
              animated="fade"
              style={{ marginBottom: "5vh" }}
              onClick={this.handleBuy}
            >
              <Button.Content visible>Buy</Button.Content>
              <Button.Content hidden>{total}</Button.Content>
              {error && (
                <Label basic color="red" floated pointing>
                  {error}
                </Label>
              )}
            </Button>
            <Button
              animated="fade"
              style={{ marginBottom: "5vh" }}
              onClick={this.handleWishlist}
              toggle
              active={active}
            >
              <Button.Content hidden>Wishlist</Button.Content>
              <Button.Content visible>
                <Icon name="like" />
              </Button.Content>
            </Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column floated="right">
            <Button
              icon="minus"
              style={{ marginRight: "1em" }}
              onClick={this.decrement}
            />
            {this.state.price}
            <Button
              icon="plus"
              style={{ marginLeft: "1em" }}
              onClick={this.increment}
            />
          </Grid.Column>
        </Grid.Row>
      </Container>
    );
  }
}
