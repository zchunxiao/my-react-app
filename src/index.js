import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import FastClick from 'fastclick';

// 绑定到body
FastClick.attach(document.body);

render((
   <BrowserRouter>
      <App />
   </BrowserRouter>
), document.getElementById('root'))

