import React, { Component } from "react";
import { Grid,Feed, Responsive,Segment, Header } from "semantic-ui-react";

export default class Footer extends Component {
  render() {
    return (
      <Responsive as={Segment} minWidth={40000}
        
        columns={3}
        style={{
          backgroundColor: "#ff5555",
          marginTop: "10vh"
        }}
        textAlign="center"
        verticalAlign="bottom"
      >
        <Grid.Row columns="equal">
          <Grid.Column width={5} verticalAlign='top' >

            <Feed>

            <Header>Dumbtick</Header>
            <span style={{ textAlign: "justify" }}>
              Dumbtick are web base platform that provides tickets for various
              events around sports, music, science, and programming.
            </span>
            </Feed>
          </Grid.Column>
          <Grid.Column width={4}>
          <Feed>

              
              <Header as='h4'> Follow us on  </Header>
              <Feed.Event>  
                <Feed.Label icon="twitter" />
                <Feed.Content>
                  <Feed.Date content="twitter" />
                  <Feed.Summary>@dumbtick</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label icon="facebook" />
                <Feed.Content>
                  <Feed.Date content="Facebook" />
                  <Feed.Summary>dumbtick</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Grid.Column>
          
          <Grid.Column floated='left' >
          <Feed>
              <Header as='h4'>Have a Question?  </Header>
              <Feed.Event>
                <Feed.Label icon="phone" />
                <Feed.Content>
                  <Feed.Date content="Phone" />
                  <Feed.Summary>08010830813</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label icon="mail" />
                <Feed.Content>
                  <Feed.Date content="email" />
                  <Feed.Summary>dumbtick@gmail.com</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Grid.Column>
        </Grid.Row>
      </Responsive>
    );
  }
}
