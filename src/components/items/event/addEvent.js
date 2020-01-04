import React, { Component } from "react";
import { Container, Header, Form, Grid } from "semantic-ui-react";
import Axios from "axios";

export default class AddEvent extends Component {
  state = {
    email: "",
    title: "",
    category: "",
    price:0,
    desc: "",
    content: "",
    address: "",
    img: "",
    urlMaps: "",
    phone:'',
    start: "",
    end: ""
  };

  handleSubmit = e => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("id");

    const {
      email,
      title,
      category,
      price,
      desc,
      content,
      address,
      img,
      urlMaps,
      phone,
      start,
      end
    } = this.state;

    if (token) {
      Axios.post("http://dumb-tick-api.herokuapp.com/api/event", {
        userId,
        email,
        title,
        category,
        price,
        desc,
        content,
        address,
        img,
        urlMaps,
        phone,
        start,
        end
      })
        .then(res => {
          console.log(res)
          if (res.data) {
            alert("Event successfully added");
            window.location.href = `/event/?id=${res.data.data.id}`;
          } else {
            this.setState({ errMessage: res.data.message });
          }
        })
        .catch(err => this.setState({ error: err }));
    } else {
      alert("You need to login first");
    }
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  render() {
    const {
      email,
      title,
      category,
      price,
      desc,
      content,
      address,
      img,
      urlMaps,
      phone,
      start,
      end
    } = this.state;

    return (
      <Container style={{ marginTop: "10vh" }}>
        <Header as="h2" color="red">
          Add Event
        </Header>
        <Grid centered>
          <Grid.Column width={8}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Input
                label="Title Event"
                placeholder="Add event Name"
                name="title"
                value={title}
                onChange={this.handleChange}
              />
              <Form.Input
                label="Short Description"
                placeholder="Add event Short description"
                name="desc"
                value={desc}
                onChange={this.handleChange}
              />
              <Form.Input
                label="Event Full Description"
                placeholder="Add full description"
                name="content"
                value={content}
                onChange={this.handleChange}
              />
              <Form.Input label="Category"  name="category"
                value={category}
                onChange={this.handleChange} placeholder="Add event category (1-4) (sport,music,science,programming)" />
              <Form.Input
                label="Upload Pamflet"
                placeholder="Upload Your event Pamflet Image URL"
                name="img"
                value={img}
                onChange={this.handleChange}
              />
              <Form.Input
                label="Start Time"
                placeholder="When your event start?"
                type='date'
                name="start"
                value={start}
                onChange={this.handleChange}
              />
              <Form.Input
              type='date'
                label="End Time"
                placeholder="When your eveny Ended?"
                name="end"
                value={end}
                onChange={this.handleChange}
              />
              <Form.Input
              
                label="Price"
                placeholder="How much your event ticket price?"
                name="price"
                value={price}
                onChange={this.handleChange}
              />
              <Form.Input
                label="Phone number"
                placeholder="your phone number"
                name="phone"
                value={phone}
                onChange={this.handleChange}
              />
              <Form.Input
                label="Email"
                placeholder="your email address"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
              <Form.Input label="Address Event"  name="address"
                value={address}
                onChange={this.handleChange}placeholder="Add event Name" />
              <Form.Input
                label="Url Map"
                placeholder="Please input embedded map Iframe"
                name="urlMaps"
                value={urlMaps}
                onChange={this.handleChange}
              />
              <Form.Input label="Address Event" placeholder="Add event Name" />
              <Form.Button type="Registration" content="add event" fluid />
            </Form>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}
