import React from 'react';
import ReactDOM from 'react-dom';
// import { hydrate, render } from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// const rootElement = document.getElementById('root');

// hydrate is required by react-snap.
// if (rootElement.hasChildNodes()) {
//   hydrate(<StrictApp />, rootElement);
// } else {
//   render(<StrictApp />, rootElement);
// }
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
