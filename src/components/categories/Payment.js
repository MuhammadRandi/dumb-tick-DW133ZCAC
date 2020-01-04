import React, { Component } from "react";
import {
  Grid,
  Segment,
  Card,
  Header,
  Dimmer,
  Divider
} from "semantic-ui-react";
import { connect } from "react-redux";
import { getOrder } from "../../_actions/order";
import Tickets from "./Tickets";

class Payment extends Component {
  componentDidMount() {
    this.props.dispatch(getOrder(localStorage.getItem("id")));
  }

  render() {
    const data = this.props.order;
    const arrSum = data => data.reduce((a,b) => a + b, 0)
    return (
      <Grid>
        <Grid.Row centered>
          <Header as="h1" color="red" textAlign="left">
            Payment
          </Header>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column width={10}>
            <Segment color="red">
              <Card.Group>
                {data.map((item, index) => (
                  <Tickets
                    key={index}
                    address={item.event.address}
                    desc={item.event.desc}
                    img={item.event.img}
                    name={item.user.name}
                    title={item.event.title}
                    start={item.event.start}
                    confirmed={item.confimedStatus}
                  />
                ))}
              </Card.Group>
              <Grid.Row style={{paddingTop:'2vh'}}>
                <Grid.Column width="10">
                  <Header floated="left">Shopping Summary</Header>
                </Grid.Column>
                <Grid.Column width="10">
                <Header floated="right">{arrSum}</Header>
                </Grid.Column>
              </Grid.Row>
              <Divider />
              <Grid.Row></Grid.Row>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    order: state.orders.data
  };
};

export default connect(mapStateToProps)(Payment);
