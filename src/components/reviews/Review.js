import React, { Component } from 'react';

class Review extends Component {

  handleReviewClick = () => {
    this.props.deleteReview(this.props.review.id)
  }

  render() {
    const { review } = this.props

    return (
      <div>
        <li>
          {review.text}
        <button onClick={this.handleReviewClick}> X </button>
        </li>
      </div>
    );
  }

};

export default Review;
