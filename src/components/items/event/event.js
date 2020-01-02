import React, { Component } from "react";
import { Grid, Container, Card } from "semantic-ui-react";
import EventCard from "./eventCard";
import { getIdEvent } from "../../../_actions/events";
import { connect } from "react-redux";

class EventPage extends Component {


  query = new URLSearchParams(window.location.search);
  url = this.query.get("id");

  componentDidMount() {
    const id = this.url;
    this.props.dispatch(getIdEvent(id));
  }

  render() {
    const Data = this.props.events;
    console.log(Data);
    return (
      <Container>
        <Grid centered style={{ paddingTop: "3em", paddingBottom: "5em" }}>
          <Card.Group>
            <EventCard
              color={Data.color}
              title={Data.title}
              image={Data.img}
            />
          </Card.Group>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.eventDetails.data
  };
};

export default connect(mapStateToProps)(EventPage);
