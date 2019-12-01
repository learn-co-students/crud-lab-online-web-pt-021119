import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.restaurants.map(restaurant => <Restaurant deleteRestaurant={this.props.deleteRestaurant} restaurant={restaurant}/>)}
      </ul>
    );
  }
};



export default Restaurants;