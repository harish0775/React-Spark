
///import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {StrictMode} from 'react';

import "./index.css";
//import App from './Form/App.js';
//import Validation from './Validation/validation.js';
//import Func from './Functions/index.js';
// import LifeCycle  from './LifeCycle/app.js'
  //import Hooks  from './Hooks/app.js'
//   import Bootstrap  from './React-Boostrap/app.js'
import Array from './Array-List-Object/array.js'
function Hello() {
 return(
     
     <div>
  <h1>React Components!</h1>
  {/* <App/> */}
  {/* <Validation/> */}
  {/* <Func data = {getdata}/> */}
  <hr class="outer"/>

  <div class = "LifeCyle">
  <h1>Array!</h1> 
       {/* <LifeCycle/>  */}
       {/* <Hooks/> */}
       {/* <Bootstrap/> */}
       <Array/>
  </div>
  </div>
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