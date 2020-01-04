import React, { Component } from "react";
import { Card, Image, Button,Grid,Header} from "semantic-ui-react";
import moment from "moment";
export default class Tickets extends Component {
state={
  confirmed:this.props.confrimed,
  payed:this.props.payed
}


  render() {
    const infoDate = new Date(this.props.start);
    const DateStart = moment(infoDate).format("MMMM DD YYYY");


    const confirm = this.state.confirmed
    const pay = this.props.payed
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
        <Card.Content>
          {pay != true && <Grid.Row style={{ paddingTop: "2vh" }}>
            <Grid.Column width="10">
              <Header floated="left">Price To Pay</Header>
            </Grid.Column>
            <Grid.Column width="10">
              <Header floated="right">Rp. {this.props.total}</Header>
            </Grid.Column>
          </Grid.Row>}
       
          <Grid.Row></Grid.Row>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            {confirm ? (
              <Button basic color="green">
                Approved
              </Button>
            ) : (
              <Button basic color="red">
                pending
              </Button>
            )}
          </div>
        </Card.Content>
      </Card>
    );
  }
}
