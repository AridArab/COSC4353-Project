import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import QuoteHistory from './QuoteHistory.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home Page!</h1>
  },
  {
    path: "/QuoteHistory",
    element: <QuoteHistory/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
