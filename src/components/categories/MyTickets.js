import React, { Component } from "react";
import { Grid, Segment, Card, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { getOrder } from "../../_actions/order";
import Tickets from "./Tickets";

class MyTickets extends Component {
  componentDidMount() {
    this.props.dispatch(getOrder(localStorage.getItem('id')));
  }

  render() {
    const data = this.props.order;
    return (
      <Grid centered>
        <Grid.Row>
          <Header as="h1" color="red" textAlign="left">
            My Tickets
          </Header>
        </Grid.Row>
        <Grid.Row>
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
                    confirmed={item.paymentStatus}
                  />
                ))}
              </Card.Group>
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

export default connect(mapStateToProps)(MyTickets);
