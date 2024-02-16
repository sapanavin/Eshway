

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  Root , {loader as rootLoader} from "./routes/root";
import Contact,  { loader as contactLoader} from "./routes/contact";
import ErrorPage from "./pages/error-page";

import {  createBrowserRouter,  RouterProvider} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    //action: rootAction,
    children: [
      {
        index:true,
        // path: "contacts/:contactId",
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

