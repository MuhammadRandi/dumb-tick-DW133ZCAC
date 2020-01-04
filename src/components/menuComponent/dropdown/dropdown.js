import React, { Component } from "react";
import Avatar from "react-avatar";
import { Dropdown, Image, Header, Divider, Responsive } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { getUser } from "../../../_actions/users";
import { connect } from "react-redux";

class Dropmenu extends Component {
  handleLogOut = () => {
    localStorage.clear();
    window.location.reload(true);
  };

  componentDidMount() {
    this.props.dispatch(getUser());
  }

  render() {
    const data = this.props.user;
    console.log(data);
    return (
      <Header textAlign="center">
        <Dropdown
          pointing="top right"
          icon={null}
          trigger={
            <Responsive style={{ color: "white" }}>
              {data.img == null ? (
                <Avatar
                  name={data.name}
                  round={true}
                  size="2em"
                  style={{ marginRight: "1em" }}
                />
              ) : (
                <Image avatar src={data.img} />
              )}
              {data.name}
            </Responsive>
          }
        >
          <Dropdown.Menu>
            <Dropdown.Item
              icon="user"
              text="Profile"
              as={Link}
              to={`/profile/?id=${data.id}`}
            />
              <Dropdown.Item
              icon="ticket"
              text="My Ticket"
              as={Link}
              to={`/ticket/?id=${data.id}`}
            />
                <Dropdown.Item
              icon="money bill alternate outline"
              text="Payment"
              as={Link}
              to={`/payment/?id=${data.id}`}
            />
                <Dropdown.Item
              icon="calendar alternate outline"
              text="Add Event"
              as={Link}
              to={`/addevent/?id=${data.id}`}
            />
            <Divider/>
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
