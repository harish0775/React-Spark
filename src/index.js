
///import ReactDOM from 'react-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';
import {StrictMode} from 'react';
import React,{Fragment} from 'react';
import {createRoot} from 'react-dom/client';
import "./index.css";
//import App from './Form/App.js';
//import Validation from './Validation/validation.js';
//import Func from './Functions/index.js';
// import LifeCycle  from './LifeCycle/app.js'
  import Hooks  from './Hooks/app.js'
//   import Bootstrap  from './React-Boostrap/app.js'
// import Array from './Array-List-Object/main.js'
// import ReactFragment from './ReactFragment/main.js'
// import PureComponents from './PureComponents/main.js'
function Hello() {
 return(
     
     <Fragment>
  <h1>React Components!</h1>
  {/* <App/> */}
  {/* <Validation/> */}
  {/* <Func data = {getdata}/> */}
  <hr className="outer"/>

  <div className = "LifeCyle">
  {/* <h1>Fragment!</h1>  */}
       {/* <LifeCycle/>  */}
       <Hooks/>
       {/* <Bootstrap/> */}
       {/* <Array/> */}
       {/* <ReactFragment/> */}
       {/* <PureComponents/> */}
  </div>
  </Fragment>
 )
}
const rootElement = document.getElementById('root');
const main = createRoot(rootElement);

main.render(
  <StrictMode>
    <Hello />
  </StrictMode>,
);
//ReactDOM.render(< />, document.getElementById('root'));