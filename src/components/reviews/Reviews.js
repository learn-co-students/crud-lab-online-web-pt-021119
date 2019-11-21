import React, { Component } from 'react'
import Review from './Review'
import EditReview from './EditReview'

class Reviews extends Component {

renderReviews = () => this.props.reviews.map(
  review => {
    if(review.restaurantId === this.props.restaurantId)
    return (
        <Review key={ review.id } review={ review } deleteReview={ this.props.deleteReview } editReview={ this.props.editReview } />
    )
  }
)

  render() {
    return (
      <ul>
        { this.renderReviews() }
      </ul>
    );
  }
};

export default Reviews;
