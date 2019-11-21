import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={ this.props.addRestaurant }/>
        <Restaurants restaurants={ this.props.restaurants } deleteRestaurant={ this.props.deleteRestaurant } editRestaurant={ this.props.editRestaurant }/>
      </div>
    )
  }
}

const mapStateToProps = ({ restaurants }) => ({ restaurants })

const mapDispatchToProps = dispatch => ({
  addRestaurant: restaurant => dispatch({ type: 'ADD_RESTAURANT', restaurant }),
  deleteRestaurant: id => dispatch({ type: 'DELETE_RESTAURANT', id }),
  editRestaurant: restaurant => dispatch({ type: 'EDIT_RESTAURANT', restaurant }),
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
