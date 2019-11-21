import React, { Component } from 'react'
import ReviewsContainer from '../../containers/ReviewsContainer'
import EditRestaurant from './EditRestaurant'

class Restaurant extends Component {


  render() {
    const { restaurant } = this.props;

    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={ () => this.props.deleteRestaurant(restaurant.id) }> X </button>
          <EditRestaurant restaurant={restaurant} editRestaurant={ this.props.editRestaurant } />
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
