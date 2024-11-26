import {createBrowserRouter} from "react-router-dom";
import LayoutRoot from "../layout/LayoutRoot.jsx";
import Home from "../pages/Home.jsx";
import Figures from "../pages/Figures.jsx";
import Accesories from "../pages/Accesories.jsx";
import Contact from "../pages/Contact.jsx";
import LayoutPrivate from "../layout/LayoutPrivate.jsx";
import Favorites from "../pages/Favorites.jsx";
import LayoutModal from "../layout/LayoutModal.jsx";
import Login from "../pages/Login.jsx";
import Singup from "../pages/Singup.jsx";


export const Router = createBrowserRouter([ //For create navar route
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
