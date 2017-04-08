import 'babel-polyfill'
import 'sanitize.css/sanitize.css'

import React from 'react'
import ReactDOM from 'react-dom'
import attachFastClick from 'fastclick'

import '!file-loader?name=[name].[ext]!./assets/favicon.ico'

// Remove 300ms tap delay on mobile devices
attachFastClick.attach(document.body)

import Counter2 from './components/Counter2'
//import Calc from './components/Calc'

ReactDOM.render(
  <Counter2 />,
  document.getElementById('root')
);

ReactDOM.render(
  <Counter2 />,
  document.getElementById('root2')
);







//render()  // ok så denna åkallolingen behövs ändå i en arrow func?
