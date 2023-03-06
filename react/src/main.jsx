import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ContextProvicer } from './context/ContextProvider'
import './index.css'
import router from './router'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvicer>
      <RouterProvider router={router} />
    </ContextProvicer>
  </React.StrictMode>,
)
