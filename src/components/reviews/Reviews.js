import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

renderReviews = () => this.props.reviews.map(review => <Review key={review.key} review={review}/>)

  render() {
    return (
      <ul>
        { this.renderReviews() }
      </ul>
    );
  }
};

export default Reviews;
