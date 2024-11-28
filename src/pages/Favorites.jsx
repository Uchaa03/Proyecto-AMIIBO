import React, { useContext } from 'react'
import { UserContext } from "../context/userContext.jsx";
import { Navigate } from "react-router-dom";

const Favorites = () => {
    const { user } = useContext(UserContext)

    if (!user) {
        return <Navigate to="/iniciosesion" />
    }

    return (
        <div>Favoritos</div>
    )
}
export default Favorites
