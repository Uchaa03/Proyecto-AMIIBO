import {NavLink, useNavigate} from "react-router-dom";

const NavbarLogout = () => {
    const navigate = useNavigate()

    return (
        <header className="header">
            <img className="header__logo" src="/img/LogoLight.svg" alt="AmiiboAPI Logo"/>
            <nav className="header__nav">
                <ul className="nav__menu">
                    <li className="menu__option">
                        <NavLink className="option__link" to="/">Inicio</NavLink>
                    </li>
                    <li className="menu__option">
                        <NavLink className="option__link" to="/figuras">Figuras</NavLink>
                    </li>
                    <li className="menu__option">
                        <NavLink className="option__link" to="/accesorios">Accesorios</NavLink>
                    </li>
                    <li className="menu__option">
                        <NavLink className="option__link" to="/contacto">Contacto</NavLink>
                    </li>
                </ul>
            </nav>
            <button className="header__button-logout" onClick={() => navigate("/iniciosesion")}>
                <img className="button__img" src="/img/IconoLoginLight.svg" alt="Login"/>
                Acceso
            </button>
        </header>
    )
}
export default NavbarLogout
