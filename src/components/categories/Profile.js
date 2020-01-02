import React, { Component } from "react";
import { Container, Grid } from "semantic-ui-react";
import {connect} from "react-redux"
import { getUser } from "../../_actions/users";

class Profile extends Component {

  componentDidMount() {
    this.props.dispatch(getUser());
  }



  render() {
    const User = this.props.user;
    return (
      <Container>
        <Grid>
          <Grid.Row>
            <h1>
             {User.name}
            </h1>
            <Grid.Column>
            
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}


const mapStateToProps = state => {
  return {
    user: state.users.data
  };
};

export default connect(mapStateToProps)(Profile);
