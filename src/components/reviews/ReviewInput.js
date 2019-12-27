import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

    constructor(){
      super();
      this.state = {
        text: '',
        restaurantId: ''
      };
    }

    handleChange = event => {
      this.setState({
        text: event.target.value,
        restaurantId: this.props.restaurantId
      })
    }

    handleSubmit = event => {
      event.preventDefault();
      this.props.addReview(this.state);
      this.setState({
        text: ''
      })
    }

    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
          <label>add review: </label>
          <input
          type='text'
          onChange={this.handleChange}
          name='text'
          value={this.state.text}/>
          <input type='submit'/>
          </form>
        </div>
      );
    }
  };


export default ReviewInput;
