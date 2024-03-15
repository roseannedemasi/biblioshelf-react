import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './router/Home';
import Login from './router/Login';
import ErrorPage from './router/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Home />
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "error",
    errorElement: <ErrorPage />
  }
])

// const router = createBrowserRouter([
//   {
//     path: "/", 
//     element: <Home />,
//     children: [
//       {
//         path: "login",
//         element: <Home />
//       },
//       {
//         path: "login",
//         element: <Login />
//       }
//     ]
//   },
// ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
