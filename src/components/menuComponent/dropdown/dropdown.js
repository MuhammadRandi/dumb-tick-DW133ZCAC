import React, { Component } from "react";
import { Dropdown, Image, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { getUser } from "../../../_actions/users";
import {connect } from "react-redux"

class Dropmenu extends Component {


  handleLogOut = () => {
    localStorage.clear();
    window.location.reload(true);
  };

  
 
  componentDidMount() {
    this.props.dispatch(getUser());
  }


  render() {
    const data = this.props.user
    console.log(data)
    return (
      <Header textAlign='center'> 
        <Dropdown
          pointing="top right"
          icon={null}
          trigger={
            <span>
              <Image avatar src={data.img} />
              {data.name}
            </span>
          }
        >
          <Dropdown.Menu>
            <Dropdown.Item
              icon="user"
              text="Profile"
              as={Link}
              to={`/profile/${data.id}`}
            />
            <Dropdown.Item
              icon="sign out"
              text="Sign Out"
              onClick={this.handleLogOut}
            />
          </Dropdown.Menu>
        </Dropdown>
      </Header>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.users.data
  };
};

export default connect(mapStateToProps)(Dropmenu);
