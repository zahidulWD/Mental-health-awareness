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
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
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
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
