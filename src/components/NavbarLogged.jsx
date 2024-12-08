import { useContext } from 'react'
import {NavLink, useNavigate} from "react-router-dom"
import { logout } from "../config/Firebase.jsx"
import { UserContext } from "../context/userContext.jsx"

const NavbarLogged = () => {
    // Accede al contexto
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()

    // Función de logout
    const handleLogout = async () => {
        await logout() // Cerrar sesión
        setUser(false) // Actualiza el estado de 'user' false
        navigate("/")
    }

    return (
        <header className="header">
            <img className="header__logo" src="../assets/img/LogoLight.svg" alt="AmiiboAPI Logo"/>
            <nav className="header__nav">
                <ul className="nav__menu">
                    <li className="menu__option">
                        <NavLink className="option__link" to="/figuras">Figuras</NavLink>
                    </li>
                    <li className="menu__option">
                        <NavLink className="option__link" to="/accesorios">Accesorios</NavLink>
                    </li>
                    <li className="menu__option">
                        <NavLink className="option__link" to="/contacto">Contacto</NavLink>
                    </li>
                    <li className="menu__option">
                        <NavLink className="option__link" to="/favoritos">Favoritos</NavLink>
                    </li>
                </ul>
            </nav>
            <button className="header__button" onClick={handleLogout}>
                <img className="button__img" src="../assets/img/IconoLoginLight.svg" alt="Login"/>
                Cerrar Sesión
            </button>
        </header>
    );
}

export default NavbarLogged;
