import React, { Component } from 'react';

class EditReview extends Component {

  state = {
    id: this.props.review.id,
    text: this.props.review.text,
    restaurantId: this.props.review.restaurantId,
    show: false
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.editReview({ ...this.state} )
    this.setState({
      show: false
    })
  }

  showComponent = () => {
    if(this.state.show){
        return(<form onSubmit={event => this.handleOnSubmit(event)}>
          <input type="text" onChange={event => this.handleOnChange(event)} value={this.state.text}></input>
          <input type="submit" value="Edit Review"></input>
        </form>
      )
    }
  }

  handleOnClick = () => this.setState({show: !this.state.show})

  render() {
    return (
      <div>
        <button onClick={ () => this.handleOnClick() }> Edit </button>
        { this.showComponent() }
      </div>
    );
    }
  };

export default EditReview;
