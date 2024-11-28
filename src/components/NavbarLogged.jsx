import React, { useContext } from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import { logout } from "../config/Firebase.jsx";
import { UserContext } from "../context/userContext.jsx"; // Asegúrate de importar correctamente el UserContext

const NavbarLogged = () => {
    // Accede al contexto
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate()

    // Función de logout
    const handleLogout = async () => {
        await logout(); // Cerrar sesión
        setUser(false); // Actualiza el estado de 'user' a false
        navigate("/")
    }

    return (
        <header className="header">
            <img className="header__logo" src="/src/assets/img/LogoLight.svg" alt="AmiiboAPI Logo"/>
            <nav className="header__nav">
                <NavLink className="nav__link" to="/figuras">Figuras</NavLink>
                <NavLink className="nav__link" to="/accesorios">Accesorios</NavLink>
                <NavLink className="nav__link" to="/contacto">Contacto</NavLink>
                <NavLink className="nav__link" to="/favoritos">Favoritos</NavLink>
            </nav>
            <button className="header_button" onClick={handleLogout}>Cerrar Sesión</button>
        </header>
    );
}

export default NavbarLogged;
