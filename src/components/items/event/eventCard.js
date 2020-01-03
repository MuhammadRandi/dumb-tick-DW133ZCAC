import React, { Component } from "react";
import moment from "moment";
import { Feed, Card, Image, Grid, Header } from "semantic-ui-react";
import OrderCounter from "./orderCounter";

export default class EventCard extends Component {
  render() {
    const infoDate = new Date(this.props.date);
    const DateStart = moment(infoDate).format("MMMM DD YYYY");

    return (
      <Card color={this.props.color} fluid>
        <Image src={this.props.image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>
            <Grid.Column floated="left">{this.props.title}</Grid.Column>
            <Grid.Column floated="right">RP. {this.props.price}</Grid.Column>
          </Card.Header>
        </Card.Content>
        
          {this.props.price && <OrderCounter price={this.props.price} />}
    
        <Card.Content>
          <Grid stackable columns={3}>
            <Grid.Column>
              <Feed>
                <Header>Hosted by</Header>
                <Feed.Event>
                  <Feed.Label icon="rss square" />
                  <Feed.Content>
                    <Feed.Date content="hosted by" />
                    <Feed.Summary>{this.props.name}</Feed.Summary>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            </Grid.Column>

            <Grid.Column>
              <Feed>
                <Header>Date & time</Header>
                <Feed.Event>
                  <Feed.Label icon="calendar alternate outline" />
                  <Feed.Content>
                    <Feed.Date content="Event Start on" />
                    <Feed.Summary>{DateStart}</Feed.Summary>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            </Grid.Column>

            <Grid.Column>
              <Feed>
                <Header>Contact Person</Header>
                <Feed.Event>
                  <Feed.Label icon="phone" />
                  <Feed.Content>
                    <Feed.Date content="Phone" />
                    <Feed.Summary>{this.props.phone}</Feed.Summary>
                  </Feed.Content>
                </Feed.Event>
                <Feed.Event>
                  <Feed.Label icon="mail" />
                  <Feed.Content>
                    <Feed.Date content="email" />
                    <Feed.Summary>{this.props.email}</Feed.Summary>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            </Grid.Column>
            <Header color="green"></Header>
          </Grid>
        </Card.Content>
      </Card>
    );
  }
}
