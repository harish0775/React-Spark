import React from 'react'
import User from './user.js'
 function App() {
  const Arrays = [
    {name :"Harish" ,email:"harish.nishad0775@gmail.com",phone :"9319130910"},
    {name :"Krish" ,email:"krish.nishad0775@gmail.com",phone :"02913019230"},
    {name :"Geet" ,email:"geet0775@gmail.com",phone :"2342343423"},
    {name :"Harish" ,email:"harish.nishad0775@gmail.com",phone :"932342340"},
    {name :"Harish" ,email:"harish.nishad0775@gmail.com",phone :"93234234230"},
    {name :"Harish" ,email:"harish.nishad0775@gmail.com",phone :"9332423420"}, {name :"Harish" ,email:"harish.nishad0775@gmail.com",phone :"9319130910"},
    {name :"Harish" ,email:"harish.nishad0775@gmail.com",phone :"9319130910"},
  ];

  return (
    <div>
      <tr>
             <th>S.No</th>
             <th>Name</th>
             <th>email</th>
             <th>phone</th>

         </tr>
    
      
   {
   Arrays.map((data,i)=>
   
  <User data = {data} i = {i}/>
   )}
  
    </div>
  )
}
export default App;