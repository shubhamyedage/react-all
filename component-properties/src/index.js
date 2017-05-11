import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  // declare properties
  <App txt="Hello World!" no={5}/>,
  document.getElementById('root')
);
