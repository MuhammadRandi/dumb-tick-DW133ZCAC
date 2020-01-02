import React, { Component } from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import moment from "moment";
import { Link } from "react-router-dom";

export default class ItemProps extends Component {
  render() {
    const infoDate = new Date(this.props.date);
    const DateStart = moment(infoDate).format("MMMM DD YYYY");
    
    return (
      
        <Card color={this.props.color} as={Link} to={`/event/?id=${this.props.id}`}>
          <Image src={this.props.image} wrapped ui={false} />
          <Card.Content>
            <Card.Header >{this.props.title}</Card.Header>
            <Card.Meta>{DateStart}</Card.Meta>

            <Card.Description>{this.props.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name="dollar" />
            {this.props.price}
          </Card.Content>
        </Card>
      
    );
  }
}
