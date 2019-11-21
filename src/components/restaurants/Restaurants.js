import React, { Component } from 'react'
import Restaurant from './Restaurant'
import { connect } from 'react-redux'

class Restaurants extends Component {

renderRestaurants = () => this.props.restaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={ this.props.deleteRestaurant } editRestaurant={ this.props.editRestaurant } />)

  render() {
    return(
      <ul>
        { this.renderRestaurants() }
      </ul>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  deleteRestaurant: id => dispatch({ type: 'DELETE_RESTAURANT', id }),
  editRestaurant: restaurant => dispatch({ type: 'EDIT_RESTAURANT', restaurant }),
})

export default connect(null, mapDispatchToProps)(Restaurants)
