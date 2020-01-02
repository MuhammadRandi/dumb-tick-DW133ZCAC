

import React, { Component } from "react";
import { connect } from "react-redux";
import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { getCategories} from "../../_actions/categories"

 class Category extends Component {
  state = {
    category: []
  };

  componentDidMount(){
    this.props.dispatch(getCategories())
  }

  render() {
    const Data = this.props.categories.data;
    console.log(Data)
    return (
      
      <Card.Group itemsPerRow={4} stackable>
        {Data.map(data => (
         <Card fluid color={data.color} header={data.name} key={data.id} as={Link} to={`/${data.name.toString().toLowerCase()}/?id=${data.id}`}></Card>
        ))}
      </Card.Group>
    );
  }
}

const mapStateToProps = state => {
  return{
    categories: state.categories
  }
}

export default connect(mapStateToProps) (Category)