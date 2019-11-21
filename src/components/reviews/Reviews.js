import React, { Component } from 'react'
import Review from './Review'
import { connect } from 'react-redux'

class Reviews extends Component {

renderReviews = () => this.props.reviews.map(
  review => {
    if(review.restaurantId === this.props.restaurantId)
    return (
        <Review key={ review.id } review={ review } editReview={ this.props.editReview } deleteReview={ this.props.deleteReview }/>
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

const mapDispatchToProps = dispatch => ({
  deleteReview: id => dispatch({ type: 'DELETE_REVIEW', id }),
  editReview: review => dispatch({ type: 'EDIT_REVIEW', review }),
})

export default connect(null, mapDispatchToProps)(Reviews)
