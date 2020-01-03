import React, { Component } from "react";
import { Container, Header, Form, Grid } from "semantic-ui-react";

export default class AddEvent extends Component {
  render() {
    return (
      <Container style={{ marginTop: "10vh" }}>
        <Header as="h2" color="red">
          Add Event
        </Header>
        <Grid centered>
          <Grid.Column width={8}>
            <Form>
              <Form.Input label="Title Event" placeholder="Add event Name" />
              <Form.Input
                label="Short Description"
                placeholder="Add event Short description"
              />
              <Form.Input
                label="Event Full Description"
                placeholder="Add full description"
              />
              <Form.Input label="Category" placeholder="Add event category" />
              <Form.Input
                label="Upload Pamflet"
                placeholder="Upload Your event Pamflet"
              />
              <Form.Input
                label="Start Time"
                placeholder="When your event start?"
              />
              <Form.Input
                label="End Time"
                placeholder="When your eveny Ended?"
              />
              <Form.Input
                label="Price"
                placeholder="How much your event ticket price?"
              />
              <Form.Input label="Address Event" placeholder="Add event Name" />
              <Form.Input
                label="Url Map"
                placeholder="Please input embedded map Iframe"
              />
              <Form.Input label="Address Event" placeholder="Add event Name" />
              <Form.Button type="Registration" content="add event" fluid />
            </Form>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}
