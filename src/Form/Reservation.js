
import React, { Component } from 'react'
class Reservation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isGoing: true,
        isfalse : true,
        numberOfGuests: 2
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
      const name = event.target.name;
  
      this.setState({
        [name]: value
      });
    }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value)
        event.preventDefault();
      }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Is going:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange} />
              <input
              name="isfalse"
              type="checkbox"
              checked={this.state.isfalse}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Number of guests:
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange} />
          </label>
          <input type="submit" value = "submit"/>
        </form>
      );
    }
  }

  export default Reservation;