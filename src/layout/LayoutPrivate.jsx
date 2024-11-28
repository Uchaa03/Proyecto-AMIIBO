import Navbar from "../components/Navbar.jsx";
import {Outlet} from "react-router-dom";

const LayoutPrivate = () => {
    return (
        <>
            <Outlet/>
        </>
    )
}
export default LayoutPrivate
