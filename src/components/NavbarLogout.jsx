import React from 'react'
import {NavLink, useNavigate} from "react-router-dom";

const NavbarLogout = () => {
    const navigate = useNavigate()

    return (
        <header className="header">
            <img className="header__logo" src="/src/assets/img/LogoLight.svg" alt="AmiiboAPI Logo"/>
            <nav className="header__nav">
                <NavLink className="nav__link" to="/">Inicio</NavLink>
                <NavLink className="nav__link" to="/figuras">Figuras</NavLink>
                <NavLink className="nav__link" to="/accesorios">Accesorios</NavLink>
                <NavLink className="nav__link" to="/contacto">Contacto</NavLink>
            </nav>
            <button className="header_button" onClick={() => navigate("/iniciosesion")}>Acceso</button>
        </header>
    )
}
export default NavbarLogout
