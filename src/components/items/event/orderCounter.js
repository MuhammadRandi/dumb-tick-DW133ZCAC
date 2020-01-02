import React, { Component } from "react";
import { Grid, Header, Button, Icon } from "semantic-ui-react";

export default class OrderCounter extends Component {
  state = {
    price: 1
  };



  increment = () =>{
      this.setState({price: this.state.price +1 })
  }
  decrement = () => {
      this.state.price > 2 ? 
      this.setState({price: this.state.price - 1}) : 
      this.setState({price: this.state.price = 1})  
  }
  render() {
    const total = this.state.price * this.props.price
    return (
      <Grid.Row verticalAlign='bottom'>
        <Header >
          <Grid.Column floated="right" >
            <Button icon="minus" style={{ marginRight: "1em" }} onClick={this.decrement}/>
            {this.state.price}
            <Button icon="plus" style={{ marginLeft: "1em" }} onClick={this.increment}/>
          </Grid.Column>
        </Header>
        <Grid.Column>
          <Button color='green' animated="fade" style={{marginBottom:'5vh'}} >
            <Button.Content visible>Buy</Button.Content>
  <Button.Content hidden>{total}</Button.Content>

          </Button>
          <Button  animated="fade" style={{marginBottom:'5vh'}}>
            <Button.Content hidden>Wishlist</Button.Content>
            <Button.Content visible>
              <Icon name="like" />
            </Button.Content>
          </Button>
        </Grid.Column>
      </Grid.Row>
    );
  }
}
