import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import { store } from './redux/store.js'
import {Provider} from 'react-redux';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store ={store}>
    <App />
  </Provider>,
)
