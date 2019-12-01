import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
		const filteredReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)
    return (
      <ul>
        {filteredReviews.map(review => <Review deleteReview={this.props.deleteReview} review={review}/>)}
      </ul>
    );
  }
};

export default Reviews;