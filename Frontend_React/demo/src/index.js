import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  Root , {loader as rootLoader, action as rootAction} from "./routes/root";
import Contact,  { loader as contactLoader} from "./routes/contact";
import ErrorPage from "./pages/error-page";

import {  createBrowserRouter,  RouterProvider} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader
      },
    ],
  },
  
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

