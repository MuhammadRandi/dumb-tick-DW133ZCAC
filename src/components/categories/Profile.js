import React, { Component } from "react";
import {
  Container,
  Grid,
  Header,
  Image,
  Button,
  Card
} from "semantic-ui-react";
import { connect } from "react-redux";
import { getUser } from "../../_actions/users";
import ItemProps from "../items/itemProps";

import { getWishlist } from "../../_actions/wishlist";

class Profile extends Component {
  query = new URLSearchParams(window.location.search);
  url = this.query.get("id");

  componentDidMount() {
    const id = this.url;
    this.props.dispatch(getUser());
    this.props.dispatch(getWishlist(id));
  }

  render() {
    const User = this.props.user;
    const Data = this.props.wishlist.data;
    console.log(Data);
    return (
      <Container>
        <Grid columns="equal">
          <Grid.Row>
            <Grid.Column>
              <Header color="red" as="h1">
                Profile
              </Header>
              <Header color="grey" as="h1">
                {User.name}
              </Header>
              <Header size="medium" color="grey">
                {User.phone}
              </Header>
              <Header size="medium" color="grey">
                {User.email}
              </Header>
              <Button color="red" floated="left">
                Edit Profile
              </Button>
            </Grid.Column>
            <Grid.Column floated="right">
              <Image circular size="medium" src={User.img} />
            </Grid.Column>
         
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Header color="red" as="h1">
                Favorite
              </Header>

              <Card.Group itemsPerRow={5} stackable>
                {Data &&
                  Data.map(data => (
                    <ItemProps
                      style={{ paddingTop: "1em", paddingBottom: "1em" }}
                      key={data.id}
                      id={data.event.id}
                      image={data.event.img}
                      title={data.event.title}
                      description={data.event.desc}
                      price={data.event.price}
                      date={data.event.start}
                    />
                  ))}
              </Card.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.users.data,
    wishlist: state.wishlist
  };
};

export default connect(mapStateToProps)(Profile);
