
import React, { Component } from 'react'
import Reservation  from './Reservation';
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      defaultvalue: 'Hello World',
      inputvalue :'Harish Nishad',
      
    };

    this.handleChangetext = this.handleChangetext.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.selectChange = this.selectChange.bind(this);
  }

  selectChange(event){
    this.setState({selectChange : event.target.value})
  }
   handleChange(event){
    this.setState({inputvalue: event.target.value});
   }
  handleChangetext(event) {
    this.setState({defaultvalue: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.defaultvalue + this.state.inputvalue+this.state.selectChange)
    event.preventDefault();
  }
  
  render() {
    return (
      <div>
        <h1>{this.state.defaultvalue}</h1>
        <h1>{this.state.inputvalue}</h1>
        <h1>{this.state.selectvalue}</h1>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.inputvalue} onChange={this.handleChange} />
        </label>
   <label> TextArea
<textarea value={this.state.defaultvalue} onChange={this.handleChangetext}  >
 This is text Area Fie
</textarea>
</label> <br/>
<select type = "checkbox" value={this.state.selectvalue} onChange={this.selectChange} multiple={true}  >
  <option  value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
        <input type="submit" value="Submit" />
      </form>
      <Reservation/>
      </div>
    );
  }
}

export default NameForm;