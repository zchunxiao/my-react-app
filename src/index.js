import React from 'react'
import { render } from 'react-dom'
import App from './App'
import store from './redux'
import { BrowserRouter } from 'react-router-dom'
import FastClick from 'fastclick';
import 'antd-mobile/dist/antd-mobile.css';  
import { Provider } from 'react-redux'
// 绑定到body
FastClick.attach(document.body);


render((
  <Provider store={store}>
   <BrowserRouter>
      <App />
   </BrowserRouter>
   </Provider>
), document.getElementById('root'))

