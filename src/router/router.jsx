import {createBrowserRouter} from "react-router-dom";
import LayoutRoot from "../layout/LayoutRoot.jsx";
import Inicio from "../pages/Inicio.jsx";
import Figuras from "../pages/Figuras.jsx";
import Accesorios from "../pages/Accesorios.jsx";
import Contacto from "../pages/Contacto.jsx";
import LayoutPrivate from "../layout/LayoutPrivate.jsx";
import Favoritos from "../pages/Favoritos.jsx";
import LayoutModal from "../layout/LayoutModal.jsx";
import InicioSesion from "../pages/InicioSesion.jsx";
import Registro from "../pages/Registro.jsx";


export const Router = createBrowserRouter([ //For create navar route
    {
        path: '/',
        element: <LayoutRoot/>,
        children: [
            {
                index: true,
                element: <Inicio/>
            },
            {
                path: "/figuras",
                element: <Figuras/>
            },
            {
                path: "/accesorios",
                element: <Accesorios/>
            },
            {
                path: "/contacto",
                element: <Contacto/>
            },
            {
                path: "/iniciosesion",
                element: <LayoutModal/>,
                children: [
                    {
                        index: true,
                        element: <InicioSesion/>
                    },
                    {
                        path: "registro",
                        element: <Registro/>
                    },
                ]
            },
            {
                path: "/favoritos",
                element: <LayoutPrivate/>,
                children: [
                    {
                        index: true,
                        element: <Favoritos/>
                    }
                ]
            },
        ]
    }
])
