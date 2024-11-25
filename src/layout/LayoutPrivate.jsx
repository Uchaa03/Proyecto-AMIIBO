import Navbar from "../components/Navbar.jsx";
import {Outlet} from "react-router-dom";

const LayoutPrivate = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}
export default LayoutPrivate
