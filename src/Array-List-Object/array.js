import React from 'react'

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
     
   <table border = "1">
     <tbody>
     <tr>
       <th>Name</th>
       <th>Email</th>
       <th>Phone</th>
     </tr>
   {
   Arrays.map((data,i)=>
   data.email == 'harish.nishad0775@gmail.com'?<tr key = {i}> 
          <td>{i}</td>
         <td>{data.name}</td>
         <td>{data.email}</td>
         <td>{data.phone}</td>
          
        
        
      </tr>:null
   )}
   </tbody>
   </table>
    </div>
  )
}
export default App;