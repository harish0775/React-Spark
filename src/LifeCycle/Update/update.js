import React, { Component } from 'react'

class update extends Component {
    constructor(props){
        super(props);
  this.state = {
      count :  0
  }
}
componentDidUpdate(prevProps, prevState, snapshot){
      console.warn("Hello World I'm componentDidUpdate",prevState.count == this.state.count);
      if(prevState.count == 10){
        alert('Exced Limit')
      }else{
          console.log("Continue")
      }
  }
    
  render() {
      console.log("I am Rendering ");
    return (
        
      <div>
          <h2>componentDidUpdate {this.state.count}</h2>
          <button onClick={()=>{this.setState({count : this.state.count+1})}}>Button</button>
      </div>
      
    )
  }
}

export default  update;