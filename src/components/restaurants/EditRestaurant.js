import React, { Component } from 'react';

class EditRestaurant extends Component {

  state = {
    id: this.props.restaurant.id,
    text: this.props.restaurant.text,
    show: false
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.editRestaurant({ ...this.state } )
    this.setState({
      show: false
    })
  }

  showComponent = () => {
    if(this.state.show){
        return(<form onSubmit={event => this.handleOnSubmit(event)}>
          <input type="text" onChange={event => this.handleOnChange(event)} value={this.state.text}></input>
          <input type="submit" value="Edit Restaurant"></input>
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

export default EditRestaurant;
