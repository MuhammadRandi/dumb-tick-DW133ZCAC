import React, { Component } from "react";
import {
  Grid,
  Container,
  Card,
  Icon,
  Header,
  Button
} from "semantic-ui-react";
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
                {Data.user && <EventCard
                  color={Data.color}
                  title={Data.title}
                  image={Data.img}
                  date = {Data.start}
                  email={Data.email}
                  phone={Data.phone}
                  name={Data.user.name}
                  price={Data.price}
                />}
              </Card.Group>
            </Grid.Column>
          </Grid.Row>
          
      
          <Grid.Row
            divided
            columns={2}
            style={{ paddingTop: "2vh", paddingBottom: "1vh" }}
          >
            <Grid.Column textAlign="justified">
              <Header
                size="large"
                textAlign="center"
                style={{ paddingTop: "1vh", paddingBottom: "1vh" }}
              >
                Event Description
              </Header>
              <p>{Data.content}</p>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <Header size="large" textAlign="center">
                Location
              </Header>
              <iframe
                title={Data.urlMap}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.341862922066!2d106.79960821476917!3d-6.218570095498405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f14d30079f01%3A0x2e74f2341fff266d!2sGelora%20Bung%20Karno%20Main%20Stadium!5e0!3m2!1sen!2sid!4v1577986403738!5m2!1sen!2sid"
                width="400"
                height="300"
                frameBorder='0'
              ></iframe>
              <Header>
                Share event
              </Header>
                <Grid.Row>
                  <Button.Group>

                  <Button color='twitter'>
                    <Icon name='twitter'/>
                    twitter
                  </Button>
                  <Button color='facebook'>
                    <Icon name='facebook'/>
                    facebook
                  </Button>
                  <Button color='grey'>
                    <Icon name='linkify'/>
                    copy link
                  </Button>
                  </Button.Group>
                </Grid.Row>
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
