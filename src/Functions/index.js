import React from 'react'

function index(props) {
  return (
    <div>

      <button onClick={()=>props.data()}>Button</button>
    </div>
  )
}
export default index;