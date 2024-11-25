import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles.css'
import {RouterProvider} from "react-router-dom";
import {Router} from "./router/router.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={Router}/>
  </StrictMode>,
)
