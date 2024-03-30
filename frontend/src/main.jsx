import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import QuoteHistory from './QuoteHistory.jsx';
import QuoteForm from './QuoteForm.jsx'
import Home from './Home.jsx';
import Profile from './Profile.jsx';
import LoginRegister from './LoginandRegister.jsx';
import './stylesheets/style.css';
import './stylesheets/index.css';

const router = createBrowserRouter([
  {
    path: "/Login",
    element: <LoginRegister/>
  },
  {
    path: "/Home",
    element: <Home/>
  },
  {
    path: "/QuoteForm",
    element: <QuoteForm/>
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
