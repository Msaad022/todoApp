import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import App from './App'

HashRouter
ReactDOM.render(
  
  // <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>

  // {/* </React.StrictMode> */}
  ,
  document.getElementById('root')
)
