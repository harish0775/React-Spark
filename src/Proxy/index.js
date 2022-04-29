
 import React, { Component } from 'react'
 
 class react extends Component {
   constructor(props){
     super(props);
     this.state={
      data: {},
      isLoaded: false,
      error: null
     }
   }
   componentDidMount(){
     fetch("https://codingninjas.in/api/v3/courses")
     .then(res=>res.json())
     .then((result)=>{
       this.setState({
         isLoaded: true,
         courses: result.data.courses
       })
     })
   }
   render() {
     const {
     error,isLoaded,courses

     } = this.state;
     if(error){
       return <div>Error : {error.message}</div>
     }else if(!isLoaded){
       return <div> Loading....</div>
     }else{
       return(
         <ul>
           {courses.map((course)=>(
             <li key = {course.id}>
             <h1>{course.title}</h1> 
             <h2>{course.name}</h2>
             
             <img src={course.classroom_icon_url}></img>
             </li>
           ))}
         </ul>
       )
     }
   }
 }

 export default react;





























// import React from 'react'

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: null,
//       isLoaded: false,
//       items: []
//     };
//   }
//   componentDidMount() {
//     fetch("https://api.example.com/items")
//       .then(res => res.json())
//       .then(
//         (result) => {
//           this.setState({
//             isLoaded: true,
//             items: result.items
//           });
//         },
//         // Note: it's important to handle errors here
//         // instead of a catch() block so that we don't swallow
//         // exceptions from actual bugs in components.
//         (error) => {
//           this.setState({
//             isLoaded: true,
//             error
//           });
//         }
//       )
//   }

//   render() {
//     const { error, isLoaded, items } = this.state;
//     if (error) {
//       return <div>Error: {error.message}</div>;
//     } else if (!isLoaded) {
//       return <div>Loading...</div>;
//     } else {
//       return (
//         <ul>
//           {items.map(item => (
//             <li key={item.id}>
//               {item.name} {item.price}
//             </li>
//           ))}
//         </ul>
//       );
//     }
//   }
// }
//   export default MyComponent;