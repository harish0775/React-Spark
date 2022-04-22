import React, { Component,createRef,Fragment } from 'react'

class App extends Component {
    constructor(){
        super();
        this.inputRef = createRef();
        this.getvalue = this.getvalue.bind(this);
    }
componentDidMount(){
    console.warn(this.inputRef.current.value = '230')
}
 getvalue(){
    console.log(this.inputRef.current.value);
  this.inputRef.current.style.color = 'Red'
}



  render() {
    return (
      <Fragment>
      <h2> Hello App</h2>
      <input type = 'text' ref ={this.inputRef} placeholder='Input Ref'></input>
      <button onClick={()=>this.getvalue()}> Button</button>
      </Fragment>
    )
  }
}

export default App;