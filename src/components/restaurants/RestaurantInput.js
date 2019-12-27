import React, { Component } from 'react';

class RestaurantInput extends Component {

  constructor(){
    super();
    this.state = {
      text: ''
    };
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>add restaurant: </label>
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

export default RestaurantInput;
