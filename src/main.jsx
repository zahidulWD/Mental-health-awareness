import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainLayout from './layout/MainLayout.jsx';
import Home from './pages/Home.jsx';
import Features from './pages/Features.jsx';
import Contact from './pages/Contact.jsx';
import PremiumSection from './pages/PremiumSection.jsx';
import Register from './pages/Register.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Consultants from './pages/Consultants.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
       {
        path: "/prices",
        element: <PremiumSection></PremiumSection>,
      },
       {
        path: "/features",
        element: <Features></Features>,
      },
      {
        path: "/consultants",
        element: <Consultants></Consultants>,
      },
       {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
