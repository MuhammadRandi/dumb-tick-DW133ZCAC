import React, { Component } from "react";
import {Feed,Card,Image,Grid} from 'semantic-ui-react'

export default class EventCard extends Component {
  render() {
    return (
      <Card
        color={this.props.color}
        fluid
      >
        <Image src={this.props.image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{this.props.title}</Card.Header>
        </Card.Content>
        <Card.Content>
          <Grid stackable columns={3}>
            <Grid.Column>
              <Feed>
                <Feed.Event>
                  <Feed.Label image="/images/avatar/small/jenny.jpg" />
                  <Feed.Content>
                    <Feed.Date content="1 day ago" />
                    <Feed.Summary>
                      
                    </Feed.Summary>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            </Grid.Column>

            <Grid.Column>
              <Feed>
                <Feed.Event>
                  <Feed.Label image="/images/avatar/small/molly.png" />
                  <Feed.Content>
                    <Feed.Date content="3 days ago" />
                    <Feed.Summary>
                     
                    </Feed.Summary>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            </Grid.Column>

            <Grid.Column>
              <Feed>
                <Feed.Event>
                  <Feed.Label image="/images/avatar/small/elliot.jpg" />
                  <Feed.Content>
                    <Feed.Date content="4 days ago" />
                    <Feed.Summary>
                     
                    </Feed.Summary>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            </Grid.Column>
          </Grid>
        </Card.Content>
      </Card>
    );
  }
}
