import React, { Component } from 'react'

class Mount extends Component {
    constructor(props){
        super(props);
  this.state = {
      name :  'Harish'
  }
}
  componentDidMount(){
      console.log("Hello World I'm compound did Mount");
  }
    
  render() {
      console.log("I am Rendering ");
    return (
        
      <div>
          <h2>Component did Mount {this.state.name}</h2>
          <button onClick={()=>{this.setState({name : 'I Love Change State'})}}>Button</button>
      </div>
      
    )
  }
}

export default  Mount;