import {lazy} from "react";
import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home.jsx";


// Lazy Load
const LayoutRoot = lazy(() => import("../layout/LayoutRoot.jsx"))
const Figures = lazy(() => import("../pages/Figures.jsx"))
const Accesories = lazy(() => import("../pages/Accesories.jsx"))
const Contact = lazy(() => import("../pages/Contact.jsx"))
const LayoutPrivate = lazy(() => import("../layout/LayoutPrivate.jsx"))
const Favorites = lazy(() => import("../pages/Favorites.jsx"))
const LayoutModal = lazy(() => import("../layout/LayoutModal.jsx"))
const Login = lazy(() => import("../pages/Login.jsx"))
const Singup = lazy(() => import("../pages/Signup.jsx"))

export const Router = createBrowserRouter([ //For create navbar route
    {
        path: '/',
        element: <LayoutRoot/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/figuras",
                element: <Figures/>
            },
            {
                path: "/accesorios",
                element: <Accesories/>
            },
            {
                path: "/contacto",
                element: <Contact/>
            },
            {
                path: "/iniciosesion",
                element: <LayoutModal/>,
                children: [
                    {
                        index: true,
                        element: <Login/>
                    },
                    {
                        path: "registro",
                        element: <Singup/>
                    },
                ]
            },
            {
                path: "/favoritos",
                element: <LayoutPrivate/>,
                children: [
                    {
                        index: true,
                        element: <Favorites/>
                    }
                ]
            },
        ]
    }
])
