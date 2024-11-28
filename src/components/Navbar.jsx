import {NavLink, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../context/userContext.jsx";
import NavbarLogged from "./NavbarLogged.jsx";
import NavbarLogout from "./NavbarLogout.jsx";

const Navbar = () => {
    const {user} = useContext(UserContext)
    return ( //Navbar to navigate in outlet.
        user? <NavbarLogged/>:<NavbarLogout/>
    )
}

export default Navbar