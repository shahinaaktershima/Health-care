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
import Doctor from './doctor/Doctor';
import Dashboard from './Dashboard';
import Usersetup from './Usersetup';
import Appointment from './doctor/Appointment';
import AllAppointment from './doctor/AllAppointment';



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
      path:'/doctor',
      element:<Doctor></Doctor>
    }
  ,{
    path:'/addAppointment',
    element:<Appointment></Appointment>
  }
  
  ]
  },
  {
    path:'/dashboard',
    element:<Dashboard></Dashboard>,
    children:[{
      path:"/dashboard",
      element:<Usersetup></Usersetup>
    },
    {
      path:'/dashboard/appointments',
      element:<AllAppointment></AllAppointment>
    }
  
  ]
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider> <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
