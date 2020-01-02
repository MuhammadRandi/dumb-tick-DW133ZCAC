import React, { Component } from "react";
import { Grid, Container, Card, GridColumn, Header } from "semantic-ui-react";
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
    console.log(this.url);
    return (
      <Container>
        <Grid centered style={{ paddingTop: "3em", paddingBottom: "5em" }}>
          <Grid.Row>
            <Grid.Column width={12}>
              <Card.Group>
                <EventCard
                  color={Data.color}
                  title={Data.title}
                  image={Data.img}
                />
              </Card.Group>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row divided columns={2}style={{paddingTop:'2vh', paddingBottom:'1vh'}}>
            <Grid.Column textAlign="justified">
              <Header size="large" textAlign="center" style={{paddingTop:'1vh', paddingBottom:'1vh'}}>
                Event Description
              </Header>
              <p>
                {Data.content}
              </p>
            </Grid.Column>
            <Grid.Column>
              <Header size='large' textAlign='center' >

              </Header>
            </Grid.Column>
          </Grid.Row>
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
