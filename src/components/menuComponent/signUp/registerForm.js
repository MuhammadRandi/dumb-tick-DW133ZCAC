import { Form, Message } from "semantic-ui-react";
import React, { Component } from "react";
import Axios from "axios";
export default class registerForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    errMessage: ""
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = e => {
    e.preventDefault();

    const name = this.state.name;
    const email = this.state.email;
    const password = this.state.password;

    Axios.post("https://dumb-tick-api.herokuapp.com/api/register", {
      name,
      email,
      password
    }).then(res => {
      if (res.data.token) {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.id);
        window.location.reload(true);
      } else {
        this.setState({ errMessage: res.data.message });
      }
    });
  };

  render() {
    const { name, email, password, errMessage } = this.state;
    return (
      <Form size="large" onSubmit={this.handleSubmit}>
        <Form.Input
          placeholder="Your Name"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <Form.Input
          placeholder="Your Email"
          name="email"
          value={email}
          onChange={this.handleChange}
        />

        <Form.Input
          placeholder="your password"
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
        />
        {errMessage && <Message error content={this.state.errMessage} />}
        <Form.Button secondary type="Registration" content="Sign Up" />
      </Form>
    );
  }
}
