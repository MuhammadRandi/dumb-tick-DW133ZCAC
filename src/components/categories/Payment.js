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
   console.log(data)
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
                    payed={item.paymentStatus}
                    total={item.total}
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

export default connect(mapStateToProps)(Payment);
