import React from "react";
import Login from "./Pages/Login";
import Menu from "./Pages/Menu"
import Registration from "./Pages/Registration";
import Schedule from "./Pages/Schedule";
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
  createHashRouter,
  RouterProvider
} from "react-router-dom";


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
])

const App = () => {
  return (<RouterProvider router={router}/>);
};

export default App;