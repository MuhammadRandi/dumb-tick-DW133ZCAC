import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

export default class Footer extends Component {
  render() {
    return (
      <Grid
        columns={3}
        style={{ backgroundColor: "grey", maxHeight: "50vh" }}
        textAlign="center"
        verticalAlign="bottom"
      >
        <Grid.Column>item1</Grid.Column>
        <Grid.Column>item2</Grid.Column>
        <Grid.Column>item3</Grid.Column>
      </Grid>
    );
  }
}
