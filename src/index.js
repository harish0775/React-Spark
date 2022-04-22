
import { StrictMode } from 'react';
import React, { Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
function Hello() {
  return (
    <Fragment>
      <div className="LifeCyle">
        <App />
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