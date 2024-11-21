import {NavLink} from "react-router-dom";

const Navbar = () => {

    return ( //Navbar to navigate in outlet.
        <header>
            <img src="" alt="AmiiboAPI Logo"/>
            <nav>
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="/figuras">Figuras</NavLink>
                <NavLink to="/accesorios">Accesorios</NavLink>
                <NavLink to="/contacto">Contacto</NavLink>
            </nav>
            <button>Acceso</button>
        </header>
    )
}

export default Navbar