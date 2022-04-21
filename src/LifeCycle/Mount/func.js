import React, { useState } from 'react';
function Index() {
  const [name,setName] = useState("Harish");
  function getupdate(){
    setName("Krish");
  }
  return (
    <div>
   <h3> Mount Index</h3>
   <h4> Made By {name}</h4>
      <button onClick={getupdate}> Update</button>
    </div>
  )
}
export default Index;
