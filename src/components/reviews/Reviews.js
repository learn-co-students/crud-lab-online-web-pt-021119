import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

renderReviews = () => this.props.reviews.map(review => {
  if(review.restaurantId === this.props.restaurantId){
    return <Review review={ review } deleteReview={ this.props.deleteReview }/>
    }
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
