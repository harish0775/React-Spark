import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
 class App extends Component {
  render() {
    return (
      <div>
          <h1> Bootstrap</h1>
          <Button  variant="secondary" className="mx-4">Click Me</Button>
          {/* <Row className="mx-0">
  <Button as={Col} variant="primary">Button #1</Button>
  <Button as={Col} variant="secondary" className="mx-2">Button #2</Button>
  <Button as={Col} variant="success">Button #3</Button>
</Row> */}
      </div>
    )
  }
}

export default App;