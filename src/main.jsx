import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Layout/Main';
import Home from './Components/Home/Home';
import OrderReview from './Components/OrderReview/OrderReview';
import Aboutus from './Components/Aboutus/Aboutus';
import Contact from './Components/Contact/Contact';
import Grandpa from './Components/Grandpa/Grandpa.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('tshirts.json')
      },
      {
        path: "orders",
        element: <OrderReview></OrderReview>
      },
      {
        path: "/grandpa",
        element: <Grandpa></Grandpa>
      },
      {
        path: "about",
        element: <Aboutus></Aboutus>
      },
      {
        path: "contact",
        element: <Contact></Contact>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
