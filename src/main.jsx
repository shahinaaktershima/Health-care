import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Main/Main';
import Home from './Home/Home';
import AuthProvider from './Login/AuthProvider';
import Login from './Login/Login';
import Register from './Login/Register';
import Alluser from './dashboard/Alluser';
import Usersetup from './Usersetup';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[{
      path:'/',
      element:<Home></Home>
    },
    {
      path:'/login',
      element:<Login></Login>
    },{
      path:'/register',
      element:<Register></Register>
    },
    {
      path:'/user',
      element:<Usersetup></Usersetup>
    }
    // {
    //   Path:'/user',
    //   element:<Alluser></Alluser>
    // }
  
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider> <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
