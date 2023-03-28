import React from "react";
import Login from "./Pages/Login";
import Menu from "./Pages/Menu"
import Registration from "./Pages/Registration";
import Schedule from "./Pages/Schedule";
import Subject from "./Pages/Subject";
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
  createHashRouter,
  RouterProvider
} from "react-router-dom";
import Section from "./Pages/Section";


const router = createHashRouter([
  {
    path: "/",
    element: <Login />,
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
])

const App = () => {
  return (<RouterProvider router={router}/>);
};

export default App;