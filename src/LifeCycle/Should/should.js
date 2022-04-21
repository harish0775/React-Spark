import React, { Component } from 'react'

class should extends Component {
    constructor(props){
        super(props);
  this.state = {
      count :  0
  }
}
shouldComponentUpdate(){
    console.log("ShouldComponent Update");
    if(this.state.count >5  && this.state.count<10){
        return true;
    }
}
    
  render() {
      console.log("I am Rendering ");
    return (
        
      <div>
          <h2>shouldComponentUpdate {this.state.count}</h2>
          <button onClick={()=>{this.setState({count : this.state.count+1})}}>Button</button>
      </div>
      
    )
  }
}

export default  should;