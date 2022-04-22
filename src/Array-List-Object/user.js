import React from 'react'

export default function user(props) {
  return (
    <div>
        <table border = "1">
     <tbody>
          <tr key = {props.i}> 
        <td>{props.i}</td>
         <td>{props.data.name}</td>
         <td>{props.data.email}</td>
         <td>{props.data.phone}</td>
          
        
        
      </tr>
      </tbody>
   </table>
    </div>
  )
}
