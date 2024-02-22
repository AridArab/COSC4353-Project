import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import QuoteHistory from './QuoteHistory.jsx';
import Home from './Home.jsx';
import Profile from './Profile.jsx';
import './stylesheets/index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Login Page!</h1>
  },
  {
    path: "/Home",
    element: <Home/>
  },
  {
    path: "/QuoteHistory",
    element: <QuoteHistory/>
  },
  {
    path: "/Profile",
    element: <Profile/>
  },

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)