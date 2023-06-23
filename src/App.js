import React from "react";
import Login from "./Pages/Login";
import Menu from "./Pages/Menu"
import Registration from "./Pages/Registration";
import Schedule from "./Pages/Schedule";
import Subject from "./Pages/Subject";
import SubjectRegistration from "./Pages/SubjectRegistration";
import Confirmation from "./Pages/Confirmation";
import Section from "./Pages/Section";
import Register from "./Pages/Register";
import FRegister from "./Pages/FRegister.js";
import Profile from "./Pages/Profle";
import EventUp from "./Pages/EventUp";
import CampusMap from "./Pages/CampusMap";
import Organizations from "./Pages/Organizations";
import Chat from "./Pages/Chat";




import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Activation from "./Pages/Activation";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },

  {
    path: "/Chat",
    element: <Chat/>,
  },

  {
    path: "/Organizations",
    element: <Organizations/>,
  },

  {
    path: "/CampusMap",
    element: <CampusMap/>,
  },

  
  {
    path: "/EventUp",
    element: <EventUp />,
  },

  {
    path: "/FRegister",
    element: <FRegister />,
  },

  {
    path: "/Login",
    element: <Register />,
  },
  {
    path: "/activation/:uid/:token",
    element: <Activation />,
  },
  
  {
    path: "/Profile",
    element: <Profile />,
  },

 
  {
    path: "/Menu",
    element: <Menu />,
  },
  {
    path: "/Registration",
    element: <Registration />,
  },
  {
    path: "/Schedule",
    element: <Schedule />,
  },
  {
    path: "/Subject",
    element: <Subject />,
  },
  {
    path: "/Schedule",
    element: <Schedule />,
  },
  {
    path: "/Section",
    element: <Section />,
  },
  {
    path: "/SubjectRegistration",
    element: <SubjectRegistration />,
  },
  {
    path: "/Confirmation",
    element: <Confirmation />,
  },
])

const App = () => {
  return (<RouterProvider router={router}/>);
};

export default App;