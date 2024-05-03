import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';

import Home from './Routes/Home';
import Login from './Routes/Login';
import Err from './Routes/Err';
import Options from './Routes/Options';
import Score from './Routes/Score';
import Personal from './Routes/Personal';
import Notification from './Routes/Notification';
import Admin_Home from './Routes/Admin_Home';
import Admin_Notification from './Routes/Admin_Notification';
import Admin_Options from './Routes/Admin_Options';
import Location from './Routes/Location';
import Floor_1 from './Routes/Floor_1';
import Room_313 from './Routes/Room_313';
import Trash_1 from './Routes/Trash_1';
import Trash_2 from './Routes/Trash_2';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Err />,
    element:  <Login/>,
  },
  {
    path: "/Home",
    errorElement: <Err />,
    element:  <Home/>,
  },
  {
    path: "/Notification",
    errorElement: <Err />,
    element:  <Notification/>,
  },
  {
    path: "/Options",
    errorElement: <Err />,
    element:  <Options/>,
  },
  {
    path: "/Score",
    errorElement: <Err />,
    element:  <Score/>,
  },
  {
    path: "/Personal",
    errorElement: <Err />,
    element:  <Personal/>,
  },
  {
    path: "/Admin_Home",
    errorElement: <Err />,
    element:  <Admin_Home/>,
  },
  {
    path: "/Admin_Notification",
    errorElement: <Err />,
    element:  <Admin_Notification/>,
  },
  {
    path: "/Admin_Options",
    errorElement: <Err />,
    element:  <Admin_Options/>,
  },
  {
    path: "/Location",
    errorElement: <Err />,
    element:  <Location/>,
  },
  {
    path: "/Room_313",
    errorElement: <Err />,
    element:  <Room_313/>,
  },
  {
    path: "/Floor_1",
    errorElement: <Err />,
    element:  <Floor_1/>,
  },
  {
    path: "/Trash_1",
    errorElement: <Err />,
    element:  <Trash_1/>,
  },
  {
    path: "/Trash_2",
    errorElement: <Err />,
    element:  <Trash_2/>,
  },

]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


/*
// import reportWebVitals from './reportWebVitals';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/