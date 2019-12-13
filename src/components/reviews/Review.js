import React, { Component } from 'react';

class Review extends Component {

  render() {

    return (
      <div>
        <li>
          {this.props.text}
          <button onClick={() => this.props.deleteReview(this.props.id)}>
            X
          </button>
        </li>
      </div>
    );
  }

};

export default Review;
