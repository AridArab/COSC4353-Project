import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ProtectedRoute } from './components/general/ProtectedRoute.jsx';
import { useAuth } from './authprovider/authProvider.jsx';

import QuoteHistory from './QuoteHistory.jsx';
import QuoteForm from './QuoteForm.jsx'
import Home from './Home.jsx';
import Profile from './Profile.jsx';
import LoginRegister from './LoginandRegister.jsx';
import Logout from './Logout.jsx';
import NotFound from './NotFound.jsx';
import './stylesheets/style.css';
import './stylesheets/index.css';

const Routes = () => {
  const { token } = useAuth();

  const routesForPublic = [
    {
      path: "/Login",
      element: <LoginRegister/>
    },
    {
      path: "*",
      element: <NotFound/>
    }
  ];

  const routesForAuthenticated = [
    {
      path: "/",
      element: <ProtectedRoute/>,
      children: [
        {
          path: "",
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
        {
          path: "/Logout",
          element: <Logout/>
        }
      ]
    }
  ];

  const routesForNotAuthenticated = [
    {
      path: "/",
      element: <LoginRegister/>
    }
  ];

  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticated : []),
    ...routesForAuthenticated
  ]);


  return <RouterProvider router={router}/>;
}

export default Routes;
