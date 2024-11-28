import {StrictMode, Suspense} from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles.css'
import {RouterProvider} from "react-router-dom";
import {Router} from "./router/router.jsx";
import UserProvider from "./context/userContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Suspense fallback={<div>Cargando....</div>}>
          <UserProvider>
              <RouterProvider router={Router}/>
          </UserProvider>
      </Suspense>
  </StrictMode>,
)
