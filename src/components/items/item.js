import React, { Component } from "react";
import ItemProps from "./itemProps";

import {  Card } from "semantic-ui-react";
import { connect } from "react-redux";
import {getEvents} from "../../_actions/events"

class ItemCard extends Component {
 
  componentDidMount(){
    this.props.dispatch(getEvents())
  }

  render() {
    const Data = this.props.events.data;
   
    return (
      <div style={{ paddingTop: "3em", paddingBottom: "5em" }}>
        <Card.Group itemsPerRow={5} stackable>
          {Data.map(data => (
              <ItemProps
              style={{ paddingTop: "1em", paddingBottom: "1em" }}
              key={data.id}
              id={data.id}
              image={data.img}
              title={data.title}
              description={data.desc}
              price={data.price}
              date={data.start}
              color={data.categories.color}
            />
          ))}
        </Card.Group>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    events: state.events
  }
}

export default connect(mapStateToProps) (ItemCard)