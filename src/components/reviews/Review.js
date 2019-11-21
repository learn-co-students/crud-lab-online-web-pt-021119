import React, { Component } from 'react'
import EditReview from './EditReview'

class Review extends Component {

  render() {
    const { review } = this.props

    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={ () => this.props.deleteReview(review.id) }> X </button>
        <EditReview review={review} editReview={ this.props.editReview } />
      </div>
    );
  }
};

export default Review
