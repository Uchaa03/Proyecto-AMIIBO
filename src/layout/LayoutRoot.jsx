import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

const LayoutRoot = () => {
    return ( //Navbar for navigation and outlet for change pages with layout.
        <>
            <Navbar/>
            <Outlet/>
        </>
    );
};
export default LayoutRoot;