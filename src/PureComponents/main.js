import React, {PureComponent} from 'react'
import User from './user';
class main extends  React.PureComponent {
    constructor(){
        super();

        this.state = {
            count : 0
        }
    }
  render() {
      console.log('Rendering')
    return (
      <div>
          <h1><User count = {this.state.count}/></h1>
          <button onClick={()=>this.setState({count : this.state.count+1})}>Button</button>
      </div>
    )
  }
}
export default main;
