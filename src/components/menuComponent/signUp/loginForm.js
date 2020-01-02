import React, { Component } from "react";
import { Form, Message } from "semantic-ui-react";
import Axios from "axios";

export default class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = e => {
    e.preventDefault();

    const email = this.state.email;
    const password = this.state.password;

    Axios.post("http://localhost:5000/api/login", { email, password })
      .then(res => {
        if (res.data.token) {
          console.log(res);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("id", res.data.id);
          window.location.reload(true);
        } else {
          this.setState({ error: res.data.message });
          this.setState({ err: res.data.error });
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    const { email, password, err} = this.state;
    return (
      <Form size="large" onSubmit={this.handleSubmit} error>
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
        {err && <Message error content={this.state.error} />}
        <Form.Button secondary type="Registration" content=" Sign In" />
      </Form>
    );
  }
}
