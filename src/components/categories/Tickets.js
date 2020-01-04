import React, { Component } from "react";
import { Card, Image, Button } from "semantic-ui-react";
import moment from "moment";
export default class Tickets extends Component {
  render() {
    const infoDate = new Date(this.props.start);
    const DateStart = moment(infoDate).format("MMMM DD YYYY");
    return (
      <Card fluid>
        <Card.Content>{DateStart}</Card.Content>
        <Card.Content>
          <Image floated="right" size="small" src={this.props.img} />
          <Card.Header>{this.props.name}</Card.Header>
          <Card.Meta>{this.props.title}</Card.Meta>
          <Card.Meta>{this.props.address}</Card.Meta>
          <Card.Description>{this.props.desc}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
           {this.props.confirmed ? <Button basic color="green">
              Approved
            </Button> : 
            <Button basic color="red">
            pending
          </Button>
            }
          </div>
        </Card.Content>
      </Card>
    );
  }
}
