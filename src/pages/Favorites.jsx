import {useContext, useState} from 'react'
import { UserContext } from "../context/userContext.jsx"
import { Navigate } from "react-router-dom"
import {useUserUid} from "../hooks/useUserUid.jsx";

const Favorites = () => {
    const { user } = useContext(UserContext)
    const [favorites, setFavorites] = useState([])

    if (!user) {
        return <Navigate to="/iniciosesion" />
    }
    const actualUser = useUserUid()
    if (!actualUser) {
        return <h1>Cargando...</h1>
    }

    return (
        <main className="favorites">
            <section className="favorites__user">
                <h1>{`Holaa ${actualUser.username}`}</h1>
            </section>
            <section className="favorites__cards">
                {favorites? <h2>No hay Favoritos</h2> :""}
            </section>
        </main>
    )
}
export default Favorites
